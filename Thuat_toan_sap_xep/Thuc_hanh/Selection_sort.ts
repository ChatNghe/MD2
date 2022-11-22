class SelectionSort {
    static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];

    public static selectionSort(list: number[]): void {
        for (let i = 0; i < list.length - 1; i++) {
            /* Find the minimum in the list[i..list.length-1] */
            let currentMin: number = list[i];
            let currentMinIndex: number = i;

            for (let j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentMinIndex = j;
                }
            }

            /* Swap list[i] with list[currentMinIndex] if necessary */
            if (currentMinIndex != i) {
                list[currentMinIndex] = list[i];
                list[i] = currentMin;
            }
        }
    }
}
SelectionSort.selectionSort(SelectionSort.list);
for (let i = 0; i < SelectionSort.list.length; i++)
    console.log(SelectionSort.list[i] + " ");