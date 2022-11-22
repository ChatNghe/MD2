class InsertSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];

    public static insertionSort(list: number[])
    {
        let key;
        for (let i = 1; i < list.length; i++)
        {
            key = list[i];
            let j = i - 1;

            while (j >= 0 && list[j] > key)
            {
                list[j + 1] = list[j];
                j = j - 1;
            }
            list[j + 1] = key;
        }
    }
}
InsertSort.insertionSort(InsertSort.list);
for (let i = 0; i < InsertSort.list.length; i++)
    console.log(InsertSort.list[i] + " ");