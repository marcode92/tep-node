/* var domain = "VMINTRANET";
var domainName="SQLEXPRESS2008"

const  config = {
    user:  "sa", // sql user
    password:  "Pippo123.", //sql user password
    server:  "vmintranet", // if it does not work try- localhost
    database:  "tep",
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  "tep-straord"// SQL Server instance name
    },
    
  }
  
  */

const  config = "Server=VMINTRANET\\SQLEXPRESS2008;Database=tep;Trusted_Connection=No;UID=Sa;PWD=Pippo123.;Driver={ODBC Driver 11 for SQL Server}"

module.exports = config;