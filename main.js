fetch('./data.json')
    .then((response) => response.json())
    .then(result => {
        const data = result.DoTu;
        document.querySelector('.name-en').textContent = data.name.EN
        document.querySelector('.name-vi').textContent = data.name.VI
        document.querySelector('.jobTitle').textContent = data.jobTitle
        document.querySelector('.gender').textContent = data.contact.gender
        document.querySelector('.email').textContent = data.contact.email
        document.querySelector('.phone').textContent = data.contact.phone
        document.querySelector('.address').textContent = data.contact.address
        document.querySelector('.edu-degree').textContent = data.education.degree
        document.querySelector('.edu-major').textContent = data.education.major
        document.querySelector('.edu-university').textContent = data.education.university
        document.querySelector('.edu-date').textContent = data.education.date
        document.querySelector('.edu-gpa').textContent = data.education.gpa
        document.querySelector('.skill-other').textContent = "- " + data.skill.other.join(', ') + "."
        document.querySelector('.skill-language').textContent = "- " + data.skill.language.join(', ') + "."
        document.querySelector('.skill-framework').textContent = "- " + data.skill.framework.join(', ') + "."
        document.querySelector('.skill-database').textContent = "- " + data.skill.database + "."
        data.language.forEach(item => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.classList.add("text");
            span.textContent = "- " + item;
            li.appendChild(span);
            document.getElementById('languages').appendChild(li);
        });
        document.querySelector('.objective').textContent = data.objective

        const workExperience = document.getElementById("workExperience");
        data.experience.forEach(item => {
            const li = document.createElement("li");
            const title = document.createElement("h3");
            const company = document.createElement("h3");
            const icon = document.createElement("span");
            const time = document.createElement("span");
            const calendarIcon = document.createElement("i");
            const responsibility = document.createElement("ul");

            title.classList.add("work-title");
            title.textContent = item.title;
            company.classList.add("work-company");
            company.textContent = item.company;
            icon.classList.add("icon");
            calendarIcon.classList.add("fa-solid", "fa-calendar-days");
            time.classList.add("text", "work-time");
            time.textContent = item.time;
            item.responsibility.forEach(element => {
                const liSub = document.createElement("li");
                liSub.textContent = element;
                responsibility.appendChild(liSub)
            });
            icon.appendChild(calendarIcon);
            li.appendChild(title);
            li.appendChild(company);
            li.appendChild(icon);
            li.appendChild(time);
            li.appendChild(responsibility);
            workExperience.appendChild(li);
        });

        const project = document.getElementById("projects");
        data.project.forEach(item => {
            const li = document.createElement("li");
            const name = document.createElement("h3");
            const title = document.createElement("h4");
            const icon = document.createElement("span");
            const time = document.createElement("span");
            const calendarIcon = document.createElement("i");
            const description = document.createElement("ul");

            name.classList.add("project-name");
            name.textContent = item.name;
            title.classList.add("project-title");
            title.style = "font-weight: 100"
            title.textContent = item.title;
            icon.classList.add("icon");
            calendarIcon.classList.add("fa-solid", "fa-calendar-days");
            time.classList.add("text", "project-time");
            time.textContent = item.time;
            item.description.forEach(element => {
                const liSub = document.createElement("li");
                liSub.textContent = element;
                description.appendChild(liSub)
            });

            icon.appendChild(calendarIcon);
            li.appendChild(name);
            li.appendChild(title);
            li.appendChild(icon);
            li.appendChild(time);
            li.appendChild(description);
            project.appendChild(li);
        });
        document.querySelector('.interests').textContent = "I like " + data.interest.join(', ') + " ..."
    });