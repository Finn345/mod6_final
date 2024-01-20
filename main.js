/**
 * @param img_index
 * @param item_index
 */

async function clickedEvent(img_index){

    let art_name = document.getElementsByTagName('img')[img_index].attributes[1].value;
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/search?q=${art_name}&type=art_name&limit=1&fields=title,artist_display,date_start,date_end,description`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);
    let data = await result.json();
    console.log(data);
    
    if (data && data.data && data.data.length > 0) {
        var art_title = data.data[0].title
        var artist_name = data.data[0].artist_display
        var date_started = data.data[0].date_start
        var date_finished = data.data[0].date_end
        var descrip = data.data[0].description
    
        const popupContent = `
            <h2>${art_title}</h2>
            <h4>Artist Name: ${artist_name}</h4>
            <h4>Date Started: ${date_started}</h4>
            <h4>Date Ended: ${date_finished}</h4>
            <p>Story/Description: ${descrip}</p>
        `;
    
        const popupWindow = window.open('', '_blank', 'width=600,height=400');
        
        popupWindow.document.write(popupContent);
    }
    

}

/**
 * @param id
 * @param event
 */

function getArt(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
    }
}
