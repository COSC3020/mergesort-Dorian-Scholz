function mergesort(array)
    {
    let n = array.length;

    for (let width = 1; width < n; width *= 2) 
    {
        
        for (let i = 0; i < n; i += 2 * width)
            {
        
            let left = i;
            let mid = Math.min(i + width, n);
            let right = Math.min(i + 2 * width, n);

            merge(array, left, mid, right);
        }
    }

    return array;
}

function merge(array, left, mid, right) 
{
    let merged = [];
    let i = left, j = mid;

    while (i < mid && j < right) {
        if (array[i] <= array[j]) {
            merged.push(array[i++]);
        } else {
            merged.push(array[j++]);
        }
    }

    while (i < mid)
    {
        merged.push(array[i++]);
    }

    while (j < right) 
    {
        merged.push(array[j++]);
    }

    for (let k = 0; k < merged.length; k++) 
    {
        array[left + k] = merged[k];
    }
}
