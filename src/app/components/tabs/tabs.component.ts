import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  signal,
} from "@angular/core";

interface ITab {
  id: string;
  label: string;
  content: string;
}

@Component({
  selector: "app-tabs",
  standalone: true,
  imports: [],
  templateUrl: "./tabs.component.html",
  styleUrl: "./tabs.component.css",
})
export class TabsComponent {
  @ViewChildren("tabBtn") tabBtns!: QueryList<ElementRef<HTMLButtonElement>>;

  tabs: ITab[] = [
    { id: "t1", label: "Tab 1", content: "Content for Tab 1" },
    { id: "t2", label: "Tab 2", content: "... Content for Tab 2" },
    { id: "t3", label: "Tab 3", content: "Content for Tab 3 ..." },
    { id: "t4", label: "Tab 4", content: "This is Content for Tab 4" },
  ];

  selectedTab = signal<ITab>(this.tabs[0]);

  activate(tab: ITab) {
    this.selectedTab.set(tab);
  }

  handleKeydown(event: KeyboardEvent, tab: ITab) {
    event.preventDefault();

    if (event.key === "ArrowRight") {
      this.handleArrowRight(tab);
    } else if (event.key === "ArrowLeft") {
      this.handleArrowLeft(tab);
    } else if (event.key === "Home") {
      this.handleHome();
    } else if (event.key === "End") {
      this.handleEnd();
    }
  }

  handleArrowRight(tab: ITab) {
    const numTabs = this.tabs.length;
    const currTabIndex = this.tabs.indexOf(tab);
    const nextIndex = (currTabIndex + 1) % numTabs;
    const nextTab = this.tabBtns.get(nextIndex);
    nextTab?.nativeElement.focus();
    this.activate(this.tabs[nextIndex]);
  }

  handleArrowLeft(tab: ITab) {
    const numTabs = this.tabs.length;
    const currTabIndex = this.tabs.indexOf(tab);
    const prevIndex = (currTabIndex - 1 + numTabs) % numTabs;
    const prevTab = this.tabBtns.get(prevIndex);
    prevTab?.nativeElement.focus();
    this.activate(this.tabs[prevIndex]);
  }

  handleHome() {
    const firstTab = this.tabBtns.get(0);
    firstTab?.nativeElement.focus();
    this.activate(this.tabs[0]);
  }

  handleEnd() {
    const numTabs = this.tabs.length;
    const lastTab = this.tabBtns.get(numTabs - 1);
    lastTab?.nativeElement.focus();
    this.activate(this.tabs[numTabs - 1]);
  }
}
