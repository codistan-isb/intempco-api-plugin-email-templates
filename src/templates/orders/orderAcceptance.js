export default `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
  <title>Order Acceptance</title>
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
      padding: 20px 40px 15px;
    }
    .inner-table tr:nth-child(4) td {
      padding: 0px 40px 15px;
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

      body .inner-table tr:nth-child(1) td {
        padding: 0px 0px 0 !important;
      }

      .inner-table tr:nth-child(1) td p {
        padding: 0 20px;
      }

      .inner-table tr:nth-child(2) td {
        padding: 0px 20px 10px;
      }

      .inner-table tr:nth-child(3) td {
        padding: 0 20px 10px;
      }
      .inner-table tr:nth-child(4) td {
        padding: 0 20px 0px;
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
      #device-table td{
        padding: 10px 15px !important;
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
                  Hello,<br>We have great news! Your custom order for the <span style="color: #f36f21;">Fuji Electric Inkjet Strip Chart Recorder</span> has
                  been accepted. Our team of expert engineers and technicians will ensure that your order is delivered
                  on time and as requested, with the utmost care and attention to detail.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Please don't hesitate to reach out if you have any questions or concerns about your order. We'll be
                  happy to answer any questions you may have and make sure your custom order is delivered on time and as
                  requested.</p>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"
                  style="background-color: #f36f21; color:#fff; text-decoration:none; padding: 10px 24px; border-radius:5px; text-transform:uppercase;">View
                  Custom Order</a>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Date: March 20, 2024</b></p>
              </td>
            </tr>
            <tr>
              <td>
                <table id="device-table" style="width: 100%;">
                  <tr>
                    <td><b>Model Number</b></td>
                    <td><b>PT03C:</b> Ceramic diaphgram w/Viton O'ring</td>
                  </tr>
                  <tr>
                    <td><b>Part Number</b></td>
                    <td>PT03C - DA - G - C2 - VA - B - MC -A2</td>
                  </tr>
                  <tr>
                    <td><b>Last Price</b></td>
                    <td>$226.60</td>
                  </tr>
                  <tr>
                    <td><b>Quantity</b></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td><b>Comments</b></td>
                    <td>None</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Thank you for choosing Intempco for your custom ordering needs! We look forward to working with you on your project.
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