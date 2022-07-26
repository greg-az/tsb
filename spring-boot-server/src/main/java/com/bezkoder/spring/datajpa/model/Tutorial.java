package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "kiwipizza")
public class Tutorial {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "pizzas")
	private String pizzas;

	@Column(name = "published")
	private boolean published;

	public Tutorial() {

	}

	public Tutorial(String title, String description, String pizzas, boolean published) {
		this.title = title;
		this.description = description;
		this.published = published;
		this.pizzas = pizzas;
	}

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getPizzas() {
		return pizzas;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setPizzas(String pizzas) {
		this.pizzas = pizzas;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean isPublished) {
		this.published = isPublished;
	}

	@Override
	public String toString() {
		return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + ", published=" + published + "]";
	}

}
