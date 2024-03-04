import * as fs from 'fs'
export default async function ProcessInsuranceFiles(){
  const res = await fs.readFileSync('./resources/insurances.txt', 'utf8');
  const records = res.split('\r\n');
  const insuranceCustomers = records.reduce((acc, record) => {
    const [id,fname,lname,version,insurance] = record.split(',').map(x => x.toLowerCase());
    acc[insurance] = acc[insurance] || [];
    acc[insurance].push({id,fname,lname,version});
    return acc;
  }, {});

  const filesByInsurance = Object.keys(insuranceCustomers).map(key => {
    return {
      insurance: key,
      customers: insuranceCustomers[key].sort((a,b) => (a.lname.localeCompare(b.lname) * 100) + a.fname.localeCompare(b.fname))
    }
  })

  await filesByInsurance.forEach(async file => {
    await fs.writeFileSync(`./resources/${file.insurance}.json`, JSON.stringify(file.customers, null, 2));
  });

  // TODO: write only the highest version if an ID is repeated (I ran out of time, family wants to go to the movies)
  // TODO: also didn't know the file format, if you wanted .json or .txt CSV
}