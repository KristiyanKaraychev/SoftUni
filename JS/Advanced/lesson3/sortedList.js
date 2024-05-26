function sortedList() {
    let obj = {
        elements: [],
        size: 0,
        add(element) {
            this.elements.push(element);
            this.elements.sort((a, b) => a - b);
            this.size = this.elements.length;
        },
        remove(index) {
            if (this.elements[index] != undefined) {
                this.elements.splice(index, 1);
            }
            this.size = this.elements.length;
        },
        get(index) {
            if (this.elements[index] != undefined) {
                return this.elements[index];
            }
        },
    };

    return obj;
}

let list1 = sortedList();

console.log(list1);
