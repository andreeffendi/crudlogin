import React from "react";

const billdetailss = [
  {
    status: 1,
    message: "Sukses",
    data: {
      addtionaldata: [],
      billdetails: [
        {
          adminnfee: "0.0",
          billid: "8",
          currency: "360",
          title: "TELKOMSEL 50rb - 50.149",
          totalamount: "50.149",
          description: null,
          body: ["denom: 50000"],
        },
        {
          adminnfee: "0.0",
          billid: "10",
          currency: "360",
          title: "TELKOMSEL 75rb - 75.050",
          totalamount: "75050.00",
          description: null,
          body: ["denom: 75000"],
        },
        {
          adminnfee: "0.0",
          billid: "11",
          currency: "360",
          title: "TELKOMSEL 150rb - 146.600",
          totalamount: "146600.00",
          description: null,
          body: ["denom: 150000"],
        },
        {
          adminnfee: "0.0",
          billid: "12",
          currency: "360",
          title: "TELKOMSEL 200rb - 194.900",
          totalamount: "194900.00",
          description: null,
          body: ["denom: 50000"],
        },
      ],
      billername: "PULSA TSEL",
      inquiryid: "27190993",
      paymenttype: "CLOSE_PAYMENT",
      respondscode: "0000",
      respondsmsg: "SUCCESS",
      subscriberid: "08131818181",
      subscribername: "",
    },
    trace: {
      session_id: "8217372838283aahahsd.node3",
      request_date_time: "20190704818182",
      words: "7777777nsdnnsbajs",
      bill_id: "9900002",
      account_number: "081311529599",
      systrace: 1580183728,
      inquiry_id: "27190993",
    },
  },
];

const Nomor3 = () => {
  return (
    <div>
      <h2>Menampilkan Jawaban Nomor 3</h2>
      <ul>
        {billdetailss
          .filter((detail) => detail.body > 50000)
          .map((detail, index) => (
            <li>
              {" "}
              {index} = {detail.body}{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Nomor3;