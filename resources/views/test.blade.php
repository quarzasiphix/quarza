<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<body>
    @if (Route::has('yo'))
        <p> yo </p>
    @else
        <p> no yo </p>
    @endif
</body>
</html>
