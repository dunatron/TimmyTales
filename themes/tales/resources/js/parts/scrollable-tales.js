export default function scrollableTales()
{
    let talesContainer = $('.tales-container');
    let Tales = $('.tale-panel');
    let TaleWidth = (Tales).outerWidth();

    let rightArrow = $('.scroll-right');
    let leftArrow = $('.scroll-left');

    let TalesNumber = $(Tales).length / 2;
    let RoundTaleNumber = (Math.ceil(TalesNumber) - 2);

    let RightArrowMax = ((RoundTaleNumber * TaleWidth) - 40);

    $(talesContainer).scroll(function(){

        var currX = $(this).scrollLeft();

        if (currX >= 80)
        {
            setVisible(leftArrow);
        } else {
            setInvisible(leftArrow);
        }
        // right arrow
        if (currX >= RightArrowMax)
        {
            setInvisible(rightArrow);
        } else {
            setVisible(rightArrow);
        }

    });

    function setVisible(element)
    {
        $(element).removeClass('not-visible');
        $(element).addClass('is-visible');
    }

    function setInvisible(element)
    {
        $(element).removeClass('is-visible');
        $(element).addClass('not-visible');
    }

    $(rightArrow).on('click', function(){
        ScrollRight();
    });

    $(leftArrow).on('click', function(){
        ScrollLeft();
    });

    function ScrollRight()
    {
        var leftPos = $(talesContainer).scrollLeft();
        $(talesContainer).animate({
            scrollLeft: leftPos + TaleWidth
        }, 800);
    }

    function ScrollLeft()
    {
        var leftPos = $(talesContainer).scrollLeft();
        $(talesContainer).animate({
            scrollLeft: leftPos - TaleWidth
        }, 800);
    }

}