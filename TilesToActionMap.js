let tileClassToActionArrayMap= 
{
    'tile1' : [checkTwoDowns,checkTwoRights,checkSlantDownFromLeft],
    'tile2' : [checkTwoDowns,checkRight,checkLeft],
    'tile3' : [checkTwoDowns,checkTwoLefts,checkSlantDownFromRight],
    'tile4' : [checkUp,checkDown,checkTwoRights],
    'tile5' : [checkUp,checkDown,checkRight,checkLeft,checkTopRight,checkTopLeft,checkBottomRight,checkBottomLeft],
    'tile6' : [checkUp,checkDown,checkTwoLefts],
    'tile7' : [checkTwoUps,checkTwoRights,checkSlantUpFromLeft],
    'tile8' : [checkTwoUps,checkRight,checkLeft],
    'tile9' : [checkTwoUps,checkTwoLefts,checkSlantUpFromLeft]


}

