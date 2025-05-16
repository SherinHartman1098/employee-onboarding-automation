function sendOnboardingEmails() {
  const sheet= SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data= sheet.getDataRange().getValues();

  for(let i=1;i<data.length;i++){
    const row=data[i];
    const firstName=row[0];
    const lastName=row[1];
    const email=row[2];
    const jobTitle=row[3];
    const startDate=row[4];
    const status=row[5];

    if(status!=='Sent'){
      const subject=`Test, ${firstName}!`;
      const body=`
      Hi ${firstName},
      Welcome to Tech Group! We're excited to have you join as a ${jobTitle}. 
        Your first day is on ${startDate}.

        Please find your onboarding documents here:
        - [Company Handbook](https://drive.google.com)
        - [Employee Portal](https://auto1.employee.portal)

        Looking forward to seeing you soon!

        Best,  
        HR Team
      `;
      GmailApp.sendEmail(email,subject,body);
      sheet.getRange(i+1,6).setValue('Sent'); 
    }
  }
}
