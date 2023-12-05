function preview(url,foodTitle,desc){
    img = document.getElementById("preview-img")
    img.setAttribute("src",url)

    previewTitle = document.getElementById("preview-title") // preview the title
    previewDesc = document.getElementById("preview-desc")
    previewTitle.innerHTML = foodTitle
    previewDesc.innerHTML = desc

    previewContainer = document.getElementById("preview-container") //where to store the created Element
    previewContainer.style.display = "flex";
    
    

}

function closePreview(){
    var previewContainer = document.getElementById("preview-container") //where to store the created Element

    if(previewContainer.style.display == "flex"){
        previewContainer.style.display = "none";
    }}