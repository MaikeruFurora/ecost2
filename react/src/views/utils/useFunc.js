export const  convertArrayToString = (arr) => {
    let result = [];
    let temp = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (temp.length) {
                result.push(temp.join('^'));
                temp = [];
            }
            temp.push(arr[i]);
        } else {
            temp.push(arr[i]);
        }
    }
    if (temp.length) {
        result.push(temp.join('^'));
    }
    return result.join(',');
  }