const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
    employees.push(newEmployee);
  }
  
  // Contoh penggunaan:
  addEmployee('Budi', 'budi@dicoding.com', 2023);
  addEmployee('Siti', 'siti@dicoding.com', 2022);
  
  console.log(employees);
  /*
  Output yang diharapkan:
  [
    { name: 'Fulan', email: 'fulan@dicoding.com', joinYear: 2020 },
    { name: 'Budi', email: 'budi@dicoding.com', joinYear: 2023 },
    { name: 'Siti', email: 'siti@dicoding.com', joinYear: 2022 }
  ]
  */