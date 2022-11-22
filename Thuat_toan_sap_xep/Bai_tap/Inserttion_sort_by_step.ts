class InsertSort {
    static list: number[] = [12,11,13,5,6];

    public static insertionSort(list: number[])
    {
        console.log('Original array');
        console.log(list)
        console.log('-------------------------------')
        let key;
        for (let i = 1; i < list.length; i++)
        {
            key = list[i];
            let j = i;

            while (j >= 0 && list[j-1] > key)
            {
                list[j] = list[j-1];
                j = j - 1;

            }
            list[j] = key;
            console.log('Insert '+key+' into position '+(j));
            console.log(list)
            console.log('-------------------------------')
        }
    }
}
InsertSort.insertionSort(InsertSort.list);
