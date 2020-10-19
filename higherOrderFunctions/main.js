const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //Normal for looping
  for(let i=0; i< companies.length; i++) {
      console.log(companies[i],'for loop')
  }

  //forEach
  companies.forEach(function(company) {
      console.log(company.name,'forEach')
  })

  //filtering using for looping
  let canDrink = []
  for(let i=0;i<ages.length;i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i])
    }
  }

  console.log(canDrink,'filtering using for looping')

  //filtering using filter es6
  const canFilter = ages.filter(function(age) {
      if(age >= 21){
        return true;
      }
  })

  console.log(canFilter,'filtering using filter')

  //filter using arrow function
  const canFilterArrow = ages.filter((age) =>age >= 21)
  console.log(canFilterArrow,'filtering using arrow function')

  //filtering using filter es6
  const autoCompanies = companies.filter(function(auto){
      if(auto.category === "Auto") {
        return true;
      }
  })

  console.log(autoCompanies,'filtering using filter es6')

  //filtering using arrow function
  const autoCompaniesFilterArrow = companies.filter(auto => auto.category === "Auto")

  console.log(autoCompaniesFilterArrow,'filtering using arrow function')

  //filtering  using arrow function for company with start date 1980 to 1990
  const eighties = companies.filter(eight => (eight.start >= 1980 && eight.start < 1990))

  console.log(eighties,'filtering using arrow function for company with start date 1980 to 1990')

  //filtering using arrow function for company which lasted 10years
  const lastedTenYears = companies.filter(company => (company.end - company.start > 10))

  console.log(lastedTenYears,'filtering using arrow function for company which lasted 10years')

  //map
  //Create array of companies
  const companyNames = companies.map(function(company){
      return company.name;
  })

  console.log(companyNames,'creating array of companies using map es6')

   //Create array of companies versions
  const companyNamesMapVersionOne = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
    })

    console.log(companyNamesMapVersionOne,'creating array of companies details using map es6')

     //Create array of companies using arrow function
    const companyNamesMapArrowFunctions = companies.map(company => 
        `${company.name} [${company.start} - ${company.end}]`
        );
    
    console.log(companyNamesMapArrowFunctions,'creating array of companies details using map arrow function')

     //Create array of ages square using arrow function 
    const agesSquare = ages.map(age => Math.sqrt(age))
    
    console.log(agesSquare,'creating array of age square route using map arrow function')

    //Create array of ages multiply by 2 using arrow function 
    const agesTwoTimes = ages.map(age => age * 2)

    console.log(agesTwoTimes,'creating array of ages multiply by 2  using map arrow function')

    //creating multiple maps using arrow function
    const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)

    console.log(ageMap,'creating multiple maps using arrow function')

    //Sort
    const sortedCompanies = companies.sort(function(c1,c2){
        if(c1.start > c2.start){
            return 1;
        }else {
                return -1;
            }
    })

    console.log(sortedCompanies,'creating sort using es6')

    //sort using arrow function
    const sortCompaniesArrowFunction = companies.sort((a,b) => a.start > b.start ? 1 : 1)

    console.log(sortCompaniesArrowFunction, 'creating sort using arrow function')

    //Sort ages array using arrow function
    const agesSort = ages.sort()

    console.log(agesSort, 'creating age sort using arrow function this sorts based on first number')

    const agesSortBasedOnEntireNumber = ages.sort((a,b) => a-b)

    console.log(agesSortBasedOnEntireNumber, 'creating age sort using arrow function this sorts based on entire number')

    //Reduce
    //Normal reduce js function
    let ageSum = 0;
    for(let i = 0; i < ages.length; i++) {
        ageSum += ages[i];
    }

    console.log(ageSum,'creating reduce function using normal javascript code')

    //reduce using es6 function
    const ageSumReduceEs = ages.reduce(function(total,age) {
        return total + age;
    } ,0 )

    console.log(ageSumReduceEs,'creating reduce function using es6')

    //reduce using arrow function
    const ageSumArrow = ages.reduce((total,age) => total + age, 0)

    console.log(ageSumArrow,'creating reduce function using arrow')

    //Get total years for all companies using es6
    const totalYears = companies.reduce(function(total,company){
        return total + (company.end - company.start);
    },0)

    console.log(totalYears,'creating reduce function using es6 for total years for all companies')

    //Get total years for all companies using arrow function
    const totalYearsArrow = companies.reduce((total,company) => total + (company.end - company.start),0)

    console.log(totalYearsArrow,'creating reduce function using arrow function for total years for all companies')

    //Combination of all methods map,filter,sort,reduce
    const combinedMethods = ages
        .map(age => age * 2)
        .filter(age => age >= 40)
        .sort((a,b) => a - b)
        .reduce((a,b) => a + b,0)

    console.log(combinedMethods,'Combination of all methods map,filter,sort,reduce')