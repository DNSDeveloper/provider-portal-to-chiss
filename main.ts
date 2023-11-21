import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface SegmentHeader{
  PayorID:String;
  CorporatID:String;
  PolicyNo:String;
  MemberID:String;
  NIK?:String;
  BranchCode?:String;
  CardNo:Number;
  MemberName:String;
  ClaimID:String;
  ClaimType:String;
  ClaimStatus:String;
  ProviderID:String;
  AdmissionDate:Date;
  DischargeDate:Date;
  DurationDays:Number;
  CoverageID:String;
  PlanID:String;
  DisabilityNo:String;
  v1stICD:String;
  v2ndICD?:String;
  AmtInccured:Number;
  AmtApproved:Number;
  AmtNotApproved:Number;
  AmtAsoApproved:Number;
  OnPlanHighPlan:Number;
  Remarks?:String;
  ProviderExcessPaid?:Number;
  PayorInvoiceID?:String;
  HospitalInvoiceDate?:Date;
  HospitalInvoiceNo?:String;
  ReceivedDate?:Date;
  SubmissionDate?:Date;
  VerifyBy?:String;
}

interface SegmentDetail {
  ClaimNo:String;
  BenefitCode:String;
  BenefitDesc:String;
  AmtIncurred:Number;
  AmtApproved:Number;
  AmtNotApproved:Number;
  ExcessPaid:Number;
  ExcessNotPaid:Number;
  Refund:Number;
  PaidToProvider:Number;
  ASOApproved:Number;
  ReasonCodeDesc?:String;
}

async function postToChiss(): Promise<void> {
  const apiUrl = 'http://172.31.131.10/API/api/CHISSAPI/DailyCombineAdmedika'; 
  const Header = [
    {
      "PayorID": "PCETQ",
      "CorporateID": "ISPC000466",
      "PolicyNo": "E00113361900018",
      "MemberID": "AIRAS000622-0",
      "NIK": "",
      "BranchCode": "",
      "CardNo": "8000100625335998",
      "MemberName": "Iwan Setiawan Saitem",
      "ClaimID": "129043354",
      "ClaimType": "M",
      "ClaimStatus": "40",
      "ProviderID": "1909",
      "AdmissionDate": "18-NOV-2023",
      "DischargeDate": "19-NOV-2023",
      "DurationDays": "0",
      "CoverageID": "GP",
      "PlanID": "ETOP 200",
      "DisabilityNo": "",
      "v1stICD": "T78.0",
      "v2ndICD": "",
      "AmtInccured": "1551215",
      "AmtApproved": "1126290",
      "AmtNotApproved": "424925",
      "AmtAsoApproved": "0",
      "OnPlanHighPlan": "0",
      "Remarks": "",
      "ProviderExcessPaid": "0",
      "PayorInvoiceID": "",
      "HospitalInvoiceDate": "",
      "HospitalInvoiceNo": "",
      "ReceivedDate": "",
      "SubmissionDate": "",
      "VerifyBy": ""
    }
  ];
  const Detail = [
    {
    "ClaimNo": "129043354",
    "BenefitCode": "OP0032.5",
    "BenefitDesc": "B.DR.UMUM",
    "AmtIncurred": "624925",
    "AmtApproved": "200000",
    "AmtNotApproved": "424925",
    "ExcessPaid": "0",
    "ExcessNotPaid": "0",
    "Refund": "0",
    "PaidToProvider": "0",
    "ASOApproved": "0",
    "ReasonCodeDesc": ""
    },
    {
      "ClaimNo": "129043354",
      "BenefitCode": "OP0035",
      "BenefitDesc": "B.OBAT",
      "AmtIncurred": "926290",
      "AmtApproved": "926290",
      "AmtNotApproved": "0",
      "ExcessPaid": "0",
      "ExcessNotPaid": "0",
      "Refund": "0",
      "PaidToProvider": "0",
      "ASOApproved": "0",
      "ReasonCodeDesc": ""
    }
];

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: apiUrl,
    data: {Header,Detail},
  };

  try {
    const response: AxiosResponse = await axios(config);
    const apiResponse = response.data
    return apiResponse;

  } catch (error) {
    console.error(error);
    return;
  }
}

postToChiss().then((response) => {
  console.log(response);
});
