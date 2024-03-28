/**
 Background animation:
 Function that animate background colors depending on scroll position.
 Currently working on wrapper.
 */
function backgroundColorsAnimation() {
    window.addEventListener("scroll", () => {
        const colorChanger = document.getElementById('wrapper-background-colors-manipulation');
        const scrollY = window.scrollY;
        if (scrollY > 0) {
            const turn = scrollY / 1000;
            colorChanger.style.background = `linear-gradient(${turn}turn, rgba(248, 199, 231, 255) 20%, 
                                                                          rgba(198, 221, 236, 255) 80%)`;
        }
    });
}

backgroundColorsAnimation()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**Text content function:
 * this function automatically load text content for static website.
 * */
//function input: text file url & text container ID
//load text file using fetch function
//display the text file content into container
function loadTextContent(textFileUrl, textContainerID) {
    //select text container on html:
    const textContainer = document.getElementById(textContainerID)
    //use FETCH api to load text from the file:
    fetch(textFileUrl)
        //deal with response:
        .then(response => {
            //check if the response is ok:
            if (!response.ok) {
                //throw Error:
                throw new Error('File response not ok!')
            }
            //return file:
            return response.text()
        })
        //deal with data:
        .then(data => {
            //update container with the text content:
            textContainer.innerHTML = data
        })
        //catch error:
        .catch(error => {
            console.error('There was error fetching text content: ', error)
        })
}

//function "loadTextContent" must be called inside DOMContentLoaded event listener,
//to ensure that it runs after the HTML is fully loaded!
//without this, not working!
document.addEventListener("DOMContentLoaded", function () {
    loadTextContent("./TextContent/AboutFirstText.txt", "about-first-text")
    loadTextContent("./TextContent/AboutSecondText.txt", "about-second-text")
    loadTextContent("./TextContent/MostPopFirstText.txt", "most-popular-first-text")
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////