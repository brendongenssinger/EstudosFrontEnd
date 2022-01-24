function AcessHoverMenu(x, isRemove) {

    // isRemove = false;
    var resultRemove = new Boolean(isRemove);
    var visible;
    if (isRemove) {
        visible = "hidden";
    } else {
        visible = "visible";
    }
    var result = x.getElementsByTagName("ul")[0].getElementsByTagName("li");

    for (let index = 0; index < result.length; index++) {
        result[index].style.visibility = visible;

    }


}