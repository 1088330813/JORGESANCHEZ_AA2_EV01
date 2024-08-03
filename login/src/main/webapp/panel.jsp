<%-- 
    Document   : panel
    Created on : 19/07/2024, 12:48:47 p. m.
    Author     : costos
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
     <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
/>   
    </head>
    <body>
        <%
            String errorMessage = (String) session.getAttribute("errorMessage");
            if (errorMessage != null) {
                out.println("<p class='error-message'>" + errorMessage + "</p>");
                session.removeAttribute("errorMessage"); // Limpiar mensaje después de mostrarlo
            }

            if(session.getAttribute("usuario") == null) {
                // Redirige a la página principal con un mensaje de error
                session.setAttribute("errorMessage", "Ingreso fallido. Verifica tus credenciales.");
                response.sendRedirect("index.html");
                return;
            }
        %>
        <h1>Ingreso correcto a la página web &#128515;</h1>
    </body>
</html>
