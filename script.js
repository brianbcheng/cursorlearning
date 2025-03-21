function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Lorem Ipsum text for sections
const sectionTexts = {
    about: {
        title: "About Us",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        ]
    },
    work: {
        title: "Our Work",
        paragraphs: [
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        ]
    },
    contact: {
        title: "Contact Us",
        paragraphs: [
            "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
            "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
        ]
    }
};

// Start typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Type the main title and subtitle
    const title = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');
    
    typeWriter(title, 'PARALLELL', 150);
    
    setTimeout(() => {
        typeWriter(subtitle, 'Where Design Meets Innovation', 50);
    }, 1500);

    // Type section titles and content
    const sections = ['about', 'work', 'contact'];
    let delay = 3000; // Start after main title is done

    sections.forEach(section => {
        const sectionTitle = document.querySelector(`#${section} .section-title`);
        const sectionParagraphs = document.querySelectorAll(`#${section} .section-text`);
        
        setTimeout(() => {
            typeWriter(sectionTitle, sectionTexts[section].title, 100);
            
            sectionParagraphs.forEach((paragraph, index) => {
                setTimeout(() => {
                    typeWriter(paragraph, sectionTexts[section].paragraphs[index], 30);
                }, 1000 + (index * 500));
            });
        }, delay);
        
        delay += 4000; // Add delay between sections
    });
}); 