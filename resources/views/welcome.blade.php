<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Text</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
        }

        .container {
            text-align: center;
        }

        p {
            font-size: 18px;
        }

    </style>
</head>
<body>
    <div class="container">
        <p>You are not authorized to access this API. Your current session ID is: <span id="session-id">{{ session()->getId() }} </span></p>
    </div>
</body>
</html>
