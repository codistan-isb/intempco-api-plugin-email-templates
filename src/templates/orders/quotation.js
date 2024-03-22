export default
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
  <title>Quotation</title>
  <style>
    .table-wrapper {
      font-family: "Inter", sans-serif;
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
    }

    table {
      border-collapse: collapse;
    }

    img[alt="logo"] {
      width: 15%;
    }

    .inner-table {
      width: 75%;
    }

    .inner-table tr:nth-child(1) td {
      padding: 32px 40px 0;
    }

    .inner-table tr:nth-child(2) td {
      padding: 0px 40px 0;
    }

    .inner-table tr:nth-child(3) td {
      padding: 0 40px 0;
    }

    .inner-table tr:nth-child(5) td {
      padding: 0px 40px 0px;
    }

    .inner-table tr:nth-child(6) td {
      padding: 20px 40px 32px;
    }

    img[alt="bottom-logo"] {
      width: 25%;
    }

    #device-details-table td {
      border: 1px solid #333;
      padding: 10px 24px;
    }

    #device-table td {
      padding: 10px 24px;
      border: 1px solid #000;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
      .inner-table {
        width: 100%;
      }
    }

    @media only screen and (max-width: 480px) {
      body .main-table tr:nth-child(1) td {
        padding: 25px 0 !important;
      }

      img[alt="logo"] {
        width: 35%;
      }

      body .main-table tr:nth-child(2) .main-cell {
        padding: 50px 10px !important;
      }

      .inner-table {
        width: 100%;
      }

      .inner-table tr:nth-child(1) td {
        padding: 32px 20px 0;
      }
      .inner-table tr:nth-child(1) td p{
        padding: 0 20px;
      }

      .inner-table tr:nth-child(2) td {
        padding: 0px 20px 0;
      }

      .inner-table tr:nth-child(3) td {
        padding: 0 20px 0;
      }

      .inner-table tr:nth-child(5) td {
        padding: 0px 20px 0px;
      }

      .inner-table tr:nth-child(6) td {
        padding: 20px 20px 32px;
      }

      img[alt="bottom-logo"] {
        width: 35%;
      }
      #device-details-table td{
      padding: 10px 24px !important;
      }
    }
  </style>
</head>

<body>
  <div class="table-wrapper">
    <table align="center" style="width: 100%" class="main-table">
      <tr style="background-color: #061d39">
        <td align="center" style="padding: 50px 0">
          <img src="https://res.cloudinary.com/dukg2vtjk/image/upload/v1698384922/logo_xcwhng.png" alt="logo" />
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 120px 10px" class="main-cell">
          <table class="inner-table" style="
                border-radius: 6px;
                background-color: #fff;
                box-shadow: 0px 8px 24px 0px rgba(6, 29, 57, 0.2);
              ">
            <tr>
              <td>
                <p>
                  Hello,<br>Thank you for your interest in purchasing our <span style="color: #f36f21">OEM Pressure
                    Transmitter- PT01</span>. We have
                  attached the product details and images. If you have any questions or concerns, please reach out to
                  us. We are here to help and will work to ensure your satisfaction.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <img src="https://res.cloudinary.com/iaadi97/image/upload/v1711014256/device_s3g5iy.png"
                  alt="device-img" style="width: 100%;">
              </td>
            </tr>
            <tr>
              <td>
                <table id="device-details-table" style="border: 1px solid #000; width:100%;">
                  <tr>
                    <td>Model Number</td>
                    <td><b>PT03C:</b> Ceramic diaphragm w/Viton O'ring</td>
                  </tr>
                  <tr>
                    <td>Calibrated Pressure Range</td>
                    <td><b>DA: 0.50 psi</b></td>
                  </tr>
                  <tr>
                    <td>Pressure Types</td>
                    <td><b>G:</b> Guage</td>
                  </tr>
                  <tr>
                    <td>Accuracy F.S.</td>
                    <td><b>C2:</b> 0.25% of span (0.25% BFSL) std</td>
                  </tr>
                  <tr>
                    <td>Output</td>
                    <td><b>VA:</b> 0-5 Vdc 3-wire</td>
                  </tr>
                  <tr>
                    <td>Process Fitting Type/Size</td>
                    <td><b>B: 1/8" NPT male</b></td>
                  </tr>
                  <tr>
                    <td>Connector Type</td>
                    <td><b>MC:</b> M12 Micor-Male Connector</td>
                  </tr>
                  <tr>
                    <td>Extension Cable Length "E" (MC Option)</td>
                    <td><b>A2:</b> M12 Single-Ended Cordset-Female Straight - 2 meters (6 feet) long</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <br>
              </td>
            </tr>
            <tr>
              <td>
                <table id="device-table" style="width: 100%;">
                  <tr>
                    <td><b>Part Number</b></td>
                    <td><b>Last Price</b></td>
                    <td><b>Quantity</b></td>
                    <td><b>Customer Reference/Comments</b></td>
                  </tr>
                  <tr>
                    <td>PT03C - DA - G - C2 - VA - B - MC -A2</td>
                    <td>$226.60</td>
                    <td>1</td>
                    <td>None</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  If you have any questions or would like to make any changes to the product or order, please let us
                  know, and we will be happy to assist you. We look forward to speaking with you soon.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0 0 30px 0;">
                <img src="https://res.cloudinary.com/dukg2vtjk/image/upload/v1698384922/logo_xcwhng.png"
                  alt="bottom-logo" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>

</html>
`;