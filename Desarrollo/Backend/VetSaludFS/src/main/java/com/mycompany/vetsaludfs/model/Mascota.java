/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.vetsaludfs.model;

import java.time.LocalDate;

public class Mascota {
    protected int idMascota;
    protected int idUsuario;
    protected String nombreMascota;
    protected String especieMascota;
    protected char sexoMascota;
    protected String razaMascota;
    protected LocalDate fechaNacimientoMascota;
    /*
    protected   imagenMascota;
    protected   evidenciaMascota;
    */

    public int getIdMascota() {
        return idMascota;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombreMascota() {
        return nombreMascota;
    }

    public void setNombreMascota(String nombreMascota) {
        this.nombreMascota = nombreMascota;
    }

    public String getEspecieMascota() {
        return especieMascota;
    }

    public void setEspecieMascota(String especieMascota) {
        this.especieMascota = especieMascota;
    }

    public char getSexoMascota() {
        return sexoMascota;
    }

    public void setSexoMascota(char sexoMascota) {
        this.sexoMascota = sexoMascota;
    }

    public String getRazaMascota() {
        return razaMascota;
    }

    public void setRazaMascota(String razaMascota) {
        this.razaMascota = razaMascota;
    }

    public LocalDate getFechaNacimientoMascota() {
        return fechaNacimientoMascota;
    }

    public void setFechaNacimientoMascota(LocalDate fechaNacimientoMascota) {
        this.fechaNacimientoMascota = fechaNacimientoMascota;
    }
    
}
