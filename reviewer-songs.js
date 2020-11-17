const songReviews = [
    {
        "song": {
            "name": "505",
            "artist": "Arctic Monkeys",
            "youtubeUrl": "https://www.youtube.com/embed/MrmPDUvKyLs",
            "album": "Favourite Worst Nightmare",
        },
        "reviewer": {
            "nickname": "Bartek",
            "email": "bartek@gmail.com"
        },
        "review": "Wherever they turn, irony dissolves and Turner, acting out lyrics like “I lost my train of thought” or “she held me very tightly” with am-dram theatricality, can’t help but be a real rock star even as he plays with the role. In the end, every side to the band – funk troupe, garage punks, aloof posers, heartfelt songwriters – coheres on the closing R U Mine?, a diamond anthem that tightens and collapses at all the right moments. Now armed with what is essentially a greatest-hits set, Arctic Monkeys have become a band who can do everything – it might be a construct, but it feels so real."
    },
    {
        "song": {
            "name": "Do I wanna know",
            "artist": "Arctic Monkeys",
            "youtubeUrl": "https://www.youtube.com/embed/bpOSxM0rNPM",
            "album": "AM",
        },
        "reviewer": {
            "nickname": "Konrad",
            "email": "konrad-reviwer@gmail.com"
        },
        "review": "The band, bolstered by supporting players on keys and acoustic guitar, are immaculately drilled – sometimes too much so, as on Pretty Visitors, which hops around with math-rock fussiness, or She Looks Like Fun, which looks tremendously enjoyable for Cook but will surely not hang around their setlist for long.\n" +
            "\n" +
            "Much better is when their chops are transmuted into pure energy: Brianstorm, Don’t Sit Down ’Cause I’ve Moved Your Chair and View from the Afternoon swerve too fast through their corners and are all the better for it. The drummer Matt Helders, a mere timekeeper during the Tranquility Base material, is transformed into a dynamo; with a spotlight behind him, he becomes a tub-thumping Godzilla on the rear wall."
    },
    {
        song: {
            album: "Favourite Worst Nightmare",
            artist: " Arctic Monkeys",
            name: "Fluorescent Adolescent ",
            youtubeUrl: "https://www.youtube.com/embed/ma9I9VBKPiw"
        },
        review: "Great Song !!!",
        reviewer: {
            email: "awdas@gmail.com",
            nickname: "Kowalkiewicz"
        },
    }
]

function loadWebsite() {
    document.getElementById("addNewReviewForm").addEventListener("submit", addNewReviewFromFromEvent)
    loadReviews();
}

function loadReviews() {
    const reviewDivs = songReviews
        .map(review => createReviewElement(review))
        .join("")
    document.getElementById("reviews").innerHTML = `<div>${reviewDivs}</div>`
}

const addNewReviewToWebsite = (newReview) =>
    document.getElementById("reviews").innerHTML += createReviewElement(newReview)


function addNewReviewFromFromEvent(event) {
    const formElements = event.target.elements;
    const newReview = {
        "song": {
            "name": formElements["songName"].value,
            "artist": formElements["artistName"].value,
            "youtubeUrl": formElements["songYoutubeUrl"].value,
            "album": formElements["albumName"].value,
        },
        "reviewer": {
            "nickname": formElements["reviewerNickname"].value,
            "email": formElements["reviewerEmail"].value
        },
        "review": formElements["review"].value
    }
    event.preventDefault()
    event.target.reset()
    songReviews.push(newReview)
    addNewReviewToWebsite(newReview)
    console.log(`New review was added!`)
    console.log(newReview)
}


function createReviewElement(review) {
    const {name, artist, youtubeUrl, album} = review.song;
    const {nickname, email} = review.reviewer;
    return `
        <section>
            <h3>${name}</h3>
            <p>Artist : ${artist}</p>
            <p>Album : ${album}</p>
            <iframe width="600" height="300" src="${youtubeUrl}"></iframe>
            <p>Review : ${review.review}</p>
            <p>Nickname: ${nickname}</p>
            <p>Reviewer email : ${email}</p>
        </section>
        `
}