import React, {useState} from "react";

function Workout() {

    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(true);
    };

    return (
        <div className="workout" onClick={handleClick}>
            <h3>Title</h3>
            <p>Aenean at tempor ligula. Aliquam justo ligula, viverra sit amet vestibulum id, commodo quis nunc. Proin in velit vel ex dignissim pretium at pellentesque dolor. Mauris porta metus vitae finibus tincidunt. Curabitur eleifend diam sit amet ex rutrum elementum nec in turpis. Quisque fringilla sem ullamcorper feugiat posuere. Nulla mollis odio a augue rhoncus, ac porta nisl cursus.</p>
            <ul className={`workout-items ${isClicked ? "expand" : ""}`}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
}

export default Workout;