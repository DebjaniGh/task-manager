import { AsyncPipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, map, startWith } from "rxjs";

/** Shape of a single user entry in the searchable list. */
interface IUser {
  id: number;
  name: string;
}

@Component({
  selector: "app-search-filter",
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: "./search-filter.component.html",
  styleUrl: "./search-filter.component.css",
})
export class SearchFilterComponent {
  /** Static source data that the search filters against. */
  users: IUser[] = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "Debjani Ghosh" },
    { id: 5, name: "David Miller" },
    { id: 6, name: "Ganesh Pillai" },
    { id: 7, name: "Kaddy Pearson" },
  ];
  /** Signals based logic begins */
  /** Current text typed into the search box. */
  searchTerm = signal("");

  /**
   * Users matching the current search term. Being a computed signal, it
   * recalculates only when searchTerm changes and caches the result otherwise.
   */
  // filteredUsers = computed(() => {
  //   return this.filterUsers(this.searchTerm());
  // });

  /** Reads the value out of the input event and stores it in the searchTerm signal. */
  // updateSearchTerm(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   this.searchTerm.set(input.value);
  // }

  /** Case-insensitive substring match on the user's name. */
  filterUsers(searchTerm: string) {
    const normalizedUser = searchTerm.toLowerCase();
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(normalizedUser),
    );
  }
  /** Signals based logic ends */

  /** RxJS based logic begins */
  searchControl = new FormControl("", { nonNullable: true }); // make this control non nullable so that it is always a string, even on form reset

  // startWith lets us provide an initial value to an Observable
  // so initially searchControl is ""
  // in filterUsers("") will give all users
  filteredUsers$ = this.searchControl.valueChanges.pipe(
    startWith(this.searchControl.value),
    debounceTime(300), // take latest input after user stops typing for 300ms
    distinctUntilChanged(), // don't process duplicate inputs
    map((srchTerm) => this.filterUsers(srchTerm)),
  );
  /** RxJS based logic ends */
}
