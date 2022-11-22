class BubbleSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];

    public static bubbleSort(list: number[]): void {
        let needNextPass: boolean = true;

        for (let k = 1; k < list.length && needNextPass; k++) {
            /* Array may be sorted and next pass not needed */
            needNextPass = false;
            for (let i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    /* Swap list[i] with list[i + 1] */
                    let temp: number = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;

                    needNextPass = true; /* Next pass still needed */
                }
            }
        }
    }
}
BubbleSort.bubbleSort(BubbleSort.list);
for (let i = 0; i < BubbleSort.list.length; i++)
    console.log(BubbleSort.list[i] + " ");