package com.mycompany.vetsaludfs;

public class VetSaludFS {

    public static void main(String[] args) {
        System.out.println("Probando conexión");
        CConexion conexion = new CConexion();
        conexion.estableceConexion();
    }
}
