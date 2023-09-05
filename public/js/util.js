function confirmation(name){
    const answer = confirm(`apakah kamu yakin akan menghapus data ${name} ?`)
    if(answer){
        return true
    }else{
        return false
    }
}