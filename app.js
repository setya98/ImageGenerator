function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    let buttonCapture = createButton("Ambil Gambar")
    buttonCapture.position((width / 2) - 50, height - 100)
    buttonCapture.mouseClicked(download)
    background(255)
}

function download() {
    const fileDownload = `NFT${~~[Math.random(random(10000)) * random(10000)]}.png`
    save(fileDownload)
}


function draw() {
    let generate = millis() / 2000

    rotateX(generate)
    rotateY(generate)

    fill(random(255), random(255) , random(255), random(255))
    sphere(random(175))
    
    fill(random(255), random(255) , random(255), random(255))
    stroke(random(255), random(255) , random(255), random(255))
    point(random(-windowWidth / 2, windowWidth / 2), random(windowHeight / 2, -windowHeight / 2))
    
    fill(random(255), random(255) , random(255), random(255))
    line(random(-windowWidth / 2, windowWidth / 2), random(windowHeight / 2, -windowHeight / 2), random(35), random(75))

    // fill(random(255), random(255) , random(255), random(255))
    // rect(random(-windowWidth / 2, windowWidth / 2), random(windowHeight / 2, -windowHeight / 2), random(30), random(50))
}