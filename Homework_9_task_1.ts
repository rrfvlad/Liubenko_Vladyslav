type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
    return [...arr].sort((a, b) => {
        return direction === "asc" ? a.localeCompare(b) : b.localeCompare(a);
    });
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
// [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// [ 'D', 'C', 'B', 'A' ]