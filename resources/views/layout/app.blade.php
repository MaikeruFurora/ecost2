<!doctype html>
<html lang="en" class="h-100">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.84.0">
    <title>Costing</title>

    <link href="{{ asset('dist/css/bootstrap.min.css') }}" rel="stylesheet">
    @yield('links')
    <!-- Custom styles for this template -->
    <link href="{{ asset('dist/css/app.css') }}" rel="stylesheet">
  </head>
  <body class="d-flex flex-column h-100">
    <header>
      <!-- Fixed navbar -->
      @include('layout.nav')
    </header>
    <!-- Begin page content -->
    <main class="flex-shrink-0">
      <div class="container">
        @yield('content')
      </div>
    </main>
    @include('layout.footer')
    <script src="{{ asset('dist/js/bootstrap.bundle.min.js') }}"></script>
    @yield('scripts')
  </body>
</html>
