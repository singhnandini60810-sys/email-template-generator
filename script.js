function generateEmail() {

    const type = document.getElementById("type").value;
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;

    let email = "";

    if (type === "internship") {

        email = `Subject: Internship Application for ${role}

Dear ${company},

My name is ${name} and I am writing to express my interest in the ${role} internship opportunity at your organization.

I am eager to learn and contribute to your team and would appreciate the opportunity to work with your company.

I have attached my resume for your review.

Thank you for your time and consideration.

Sincerely,
${name}`;

    }

    else if (type === "leave") {

        email = `Subject: Leave Application

Dear ${company},

I am ${name} and I would like to request leave for ${role}.

I will ensure that all my responsibilities are managed during my absence.

Thank you for your understanding.

Sincerely,
${name}`;
    }

    else if (type === "job") {

        email = `Subject: Application for ${role}

Dear ${company},

My name is ${name} and I am applying for the position of ${role} at your organization.

I am excited about this opportunity and believe my skills and dedication would make me a valuable addition to your team.

I have attached my resume for your consideration.

Thank you for your time.

Sincerely,
${name}`;
    }

    document.getElementById("output").value = email;
}

function copyEmail() {

    const output = document.getElementById("output");

    output.select();
    document.execCommand("copy");

    alert("Email copied!");
}
