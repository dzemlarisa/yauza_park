        const flatsData = [
            {
                id: 1,
                image: "images/flat1.jpg",
                title: "Современная квартира в центре",
                description: "Просторная светлая квартира с современным ремонтом. Панорамные окна, кухня-гостиная.",
                rooms: 1
            },
            {
                id: 2,
                image: "images/flat2.jpg",
                title: "Уютная двухкомнатная",
                description: "Уютная квартира в спальном районе. Рядом парк, школа, детский сад.",
                rooms: 2
            },
            {
                id: 3,
                image: "images/flat3.jpg",
                title: "Просторная трёхкомнатная",
                description: "Большая квартира для семьи. Две лоджии, раздельные комнаты, современная планировка.",
                rooms: 3
            },
            {
                id: 4,
                image: "images/flat4.jpg",
                title: "Студия в новостройке",
                description: "Современная студия с евроремонтом. Встроенная кухня, санузел с джакузи.",
                rooms: 1
            },
            {
                id: 5,
                image: "images/flat5.jpg",
                title: "Двухкомнатная элит-класса",
                description: "Элитная квартира с дизайнерским ремонтом. Видовые характеристики, высокие потолки.",
                rooms: 2
            },
            {
                id: 6,
                image: "images/flat6.jpg",
                title: "Семейная трёхкомнатная",
                description: "Идеальный вариант для большой семьи. Просторные комнаты, большая кухня, две ванные.",
                rooms: 3
            }
        ];

        function createflatCard(flat) {
            return `
                <div class="flat-card" data-rooms="${flat.rooms}">
                    <img src="${flat.image}" alt="${flat.title}" class="flat-image">
                    <div class="flat-info">
                        <h3 class="flat-title">${flat.title}</h3>
                        <p class="flat-description">${flat.description}</p>
                        <span class="flat-rooms">${flat.rooms}-комнатная</span>
                    </div>
                </div>
            `;
        }

        // Функция для отрисовки всех квартир
        function renderflats() {
            const container = document.getElementById('flatsContainer');
            container.innerHTML = flatsData.map(flat => 
                createflatCard(flat)
            ).join('');
        }

        // Функция для фильтрации квартир
        function filterflats(roomType) {
            const cards = document.querySelectorAll('.flat-card');
            
            cards.forEach(card => {
                const cardRooms = card.getAttribute('data-rooms');
                
                if (roomType === 'all' || cardRooms === roomType) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.display = 'block';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            renderflats();

            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    filterflats(this.getAttribute('data-filter'));
                });
            });

            filterflats('all');
        });

        function animateCards() {
            const cards = document.querySelectorAll('.flat-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('fade-in');
            });
        }

        const style = document.createElement('style');
        style.textContent = `
            .fade-in {
                animation: fadeIn 0.5s ease-in-out forwards;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;    
                }
                to {
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        setTimeout(animateCards, 100);