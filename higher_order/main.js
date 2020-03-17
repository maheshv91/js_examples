const companies = [
    {name : 'Company one',category : 'Finance' , start : 1981, end : 2003},
    {name : 'Company two',category : 'Retail' , start : 1992, end : 2000},
    {name : 'Company three',category : 'Auto' , start : 1999, end : 2007},
    {name : 'Company four',category : 'Retail' , start : 1989, end : 2010},
    {name : 'Company five',category : 'Technology' , start : 2009, end : 2014},
    {name : 'Company six',category : 'Finance' , start : 1987, end : 2018},
    {name : 'Company seven',category : 'Auto' , start : 1986, end : 1996},
    {name : 'Company eight',category : 'Technology' , start : 2011, end : 2016},
    {name : 'Company nine',category : 'Retail' , start : 1981, end : 1989}

]


const ages = [33,12,20,19,9,94,21,44,61,13,5,45,25,64,32];


//forEach
//companies.forEach((company) => console.log(company));

//filter
// const canDrink = ages.filter((age) => {
//     if(age >= 21){
//         return true;
//     }
// })

const canDrink = ages.filter(age => age >= 21);

// filter retail companies

const retailCompany = companies.filter( (company) => 
    company.category === 'Retail'
)

// eighties comapny

const eightyCompany = companies.filter(company => 
    (company.start >= 1980 && company.start < 1990)
)

//Get companies which are more than 10 years old

const tenYearsOld = companies.filter((company) => 
    (company.end - company.start >= 10)
)


//map
// Return array of company names

const companyNames = companies.map(company => company.name);

const testMap = companies.map(company => {
    return `${company.name} [${company.start} - ${company.end}]`;
})




//sort 

const sortedCompanies = companies.sort((c1,c2) => {
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
})

const newSorted = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1))

//sort ages

const sortAges = ages.sort((a,b) => a-b)



//reduce

const sumAges =  ages.reduce((total , age) => total + age 
,0)

console.log(sumAges)