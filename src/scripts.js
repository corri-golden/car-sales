console.log("yo")


// Lightning Exercises
// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"
// Use square bracket notation to output the value of those three properties to the console in Chrome.



medBill = {
    officeName: "S.L Lampkin and Associates",
    streetAddress: "123 8th Ave South",
    doctorName: "S. L. Lampkin",
    patientName: "Len Green",
    visitDate: "12/12/2020",
    amountBilled: 220.34,
    dueDate: "12/12/2020",
}

console.log(medBill[dateVisited])
console.log(medBill[owed])
console.log(medBill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
const outputEl = document.querySelector("#outputEl")




for (const value of Object.values(medBill)) {
    outputEl.innerHTML += `<div>${value}</div>`  
}


// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.





// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
for (const value of Object.keys(medBill)) {
    outputEl.innerHTML += `<section><span>${value}</span></section>`
}

for (const entry of Object.entries(medBill)) {
    outputEl.innerHTML += `<section>${entry[0]} : ${entry[1]}</section>`
}


// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.


 const favDinners = [
    {
        foodName: "sushi",
        ethnicity: "japonese",
        vegetarian: false

    },
    {
        foodName: "edamame",
        ethnicity: "japonese",
        vegetarian: true

    },

 ]


// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.
// foreach to loop through the objects

const foodEl = document.querySelector(".food")

//object of entry method to get the key and value
favDinners.forEach(favDinner => {
    for (const entry of Object.entries(favDinner)) {
        foodEl.innerHTML += `<article>${entry[0]} : ${entry[1]}</article>`
    }
})



//Car Sales
const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]



// 1. Display the first and last name of the sales agent.
// 2. Display all keys and values for the car sold.
// 3. Display the gross profit made on the sale.
const carEl = document.querySelector(".cars")

salesByWeek.forEach(salesByWeek => {
    let keys = Object.keys(salesByWeek.vehicle)

    // console.log(keys)
    carEl.innerHTML += `
    <h1>${salesByWeek.sales_agent.first_name} ${salesByWeek.sales_agent.last_name}</h1>
    <p>${keys[0]} : ${salesByWeek.vehicle.year}</p>
    <p>${keys[1]} : ${salesByWeek.vehicle.model}</p>
    <p>${keys[2]} : ${salesByWeek.vehicle.make}</p>
    <p>${keys[3]} : ${salesByWeek.vehicle.color}</p>
    <p>${salesByWeek.gross_profit}</p>
    `
})


//questions for lauren how is it getting values for sales? why did we need to use dot not for vehicle