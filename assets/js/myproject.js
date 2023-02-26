var datas = []

function getData(){
 
    let inputProjectName = document.getElementById("inputProjectName").value
    let inputStartDate = document.getElementById("inputStartDate").value
    let inputEndDate = document.getElementById("inputEndDate").value
    let inputDescription = document.getElementById("inputDescription").value

    let image = document.getElementById("uploadImg").files
    image = URL.createObjectURL(image[0])


    let skills = []
    if (document.getElementById('nodejs').value){
        skills.push("nodejs")
    }
    if (document.getElementById('reactjs').value){
        skills.push("reactjs")
    }
    if (document.getElementById('vuejs').value){
        skills.push("vuejs")
    }
    if (document.getElementById('laravel').value){
        skills.push("laravel")
    }

    console.log("Project Name: "+inputProjectName)
    console.log("Start Date: "+inputStartDate)
    console.log("End Date: "+inputEndDate)
    console.log("Description: "+inputDescription)
    console.log("uploadImg: "+image)
    console.log("skills: "+skills)

    var data = {
        ProjectName: inputProjectName,
        StartDate: inputStartDate,
        EndDate: inputEndDate,
        Description: inputDescription,
        uploadImg: image,
        skills: skills
    }
    datas.push(data)

    var content = "<h1 style='text-align: center;'>My Project</h1><div class='project_container'>"
    for(let i = 0; i < datas.length; i++){
        // content += "<img src='"+datas[i].uploadImg+"' alt='' />"
        content += "<div class='card'>"
        content += "<div class= 'card-heading'>"
        content += "<img src="+datas[i].uploadImg+" alt=''/>"
        content += "<h4>"+datas[i].ProjectName+"</h4>"
        content += "<p class='deadline'> Durasi: "+setDuration(datas[i].StartDate,datas[i].EndDate)+" Hari</p>"
        content += "</div>"

        content += "<div class='card-body'>"
        content += "<p class='description'>"+datas[i].Description+"</p>"

        content += "<div class='icon-skills'>"
        if (datas[i].skills.includes("nodejs")){
            content += "<i class='fa-brands fa-node'></i>"
        } 
        if (datas[i].skills.includes("reactjs")){
            content += "<i class='fa-brands fa-react'></i>"
        }
        if (datas[i].skills.includes("vuejs")){
            content += "<i class='fa-brands fa-vuejs'></i>"
        }
        if (datas[i].skills.includes("laravel")){
            content += "<i class='fa-brands fa-laravel'></i>"
        }
        content += "</div>"

        content += "<div class='btn-change'>"
        content += "<a href='#' class='edit'>edit</a>"
        content += "<a href='#' class='edit'>delete</a>"
        content += "</div>"
        content += "</div>"
        content += "</div>"
    }
    content += "</div>"

    document.getElementById("container").innerHTML = content
}



const setDuration = (start, end) => {
    const dateStart = new Date(start).getTime();
    const dateEnd = new Date(end).getTime();
 
    const durasi = dateEnd - dateStart;
    const hari = durasi / (1000 * 60 * 60 * 24);
    return hari;
 };
 
           
         
 
 
            
            