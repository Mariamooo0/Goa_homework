// ელემენტების დაჭერა
const filter = document.getElementById('filter');
const sortAsc = document.getElementById('sortAsc');
const sortDesc = document.getElementById('sortDesc');
const sortRandom = document.getElementById('sortRandom');
const cardsContainer = document.querySelector('.cards');

// ფილტრის ფუნქცია
filter.onclick = () => {
    const cards = document.querySelectorAll('.card');
    const ratings = Array.from(cards).map(card => +card.dataset.rating);
    const average = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

    cards.forEach(card => {
        card.style.display = +card.dataset.rating < average ? 'none' : 'block';
    });
};

// სორტირების ფუნქცია
const sortCards = (compareFn) => {
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.sort(compareFn).forEach(card => cardsContainer.appendChild(card));
};

// სორტირება ზრდის მიხედვით
sortAsc.onclick = () => sortCards((a, b) => +a.dataset.rating - +b.dataset.rating);

// სორტირება კლების მიხედვით
sortDesc.onclick = () => sortCards((a, b) => +b.dataset.rating - +a.dataset.rating);

// რენდომული სორტირება
sortRandom.onclick = () => sortCards(() => Math.random() - 0.5);