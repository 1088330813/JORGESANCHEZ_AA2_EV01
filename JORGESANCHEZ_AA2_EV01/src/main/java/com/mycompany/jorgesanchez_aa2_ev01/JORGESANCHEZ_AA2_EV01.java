/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.jorgesanchez_aa2_ev01;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class JORGESANCHEZ_AA2_EV01 {
/*conexion a base de datos*/
    public static void main(String[] args) {
        String usuario="root";
        String password="";
        String url="jdbc:mysql://localhost:3306/jdbc";
        Connection conexion;
        Statement statement;
        ResultSet rs;
    /*Consulta de Datos existentes en tabla usuarios*/
        try {
            conexion = DriverManager.getConnection(url,usuario,password);
            statement = conexion.createStatement();
            rs=statement.executeQuery("SELECT *FROM usuarios");
            while (rs.next()){
                System.out.println(rs.getString("nombre"));
                     
            }
            //Insercción de datos
            statement.execute("INSERT INTO `usuarios`(`id`,`nombre`) VALUES (9,'yankee');");
            System.out.println("");
            rs=statement.executeQuery("SELECT *FROM usuarios");
            while (rs.next()){
                System.out.println(rs.getString("nombre"));
            }    
            //Actualización de datos
            statement.execute("UPDATE `usuarios` SET `nombre` = 'Jorge Mario Programador' WHERE `usuarios`.`id` = 0;");
            System.out.println("");
            rs=statement.executeQuery("SELECT *FROM usuarios");
            while (rs.next()){
                System.out.println(rs.getString("nombre"));
            }    
            //Eliminación de datos de base 
            statement.execute("DELETE FROM `usuarios` WHERE `usuarios`.`id` = 4;");
            System.out.println("");
            rs=statement.executeQuery("SELECT *FROM usuarios");
            while (rs.next()){
                System.out.println(rs.getString("nombre"));
                     
            }
        }catch (SQLException ex) {
            Logger.getLogger(JORGESANCHEZ_AA2_EV01.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
