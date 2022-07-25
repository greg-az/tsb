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

	@Column(name = "psize")
	private String psize;

	@Column(name = "pbase")
	private String pbase;

	@Column(name = "ptopping")
	private String ptopping;

	@Column(name = "psizeS")
	private String psizeS;

	@Column(name = "pbaseS")
	private String pbaseS;

	@Column(name = "ptoppingS")
	private String ptoppingS;

	@Column(name = "description")
	private String description;

	@Column(name = "published")
	private boolean published;

	public Tutorial() {

	}

	public Tutorial(String title, String description, String psize, String pbase, String ptopping,
	String psizeS, String pbaseS, String ptoppingS, boolean published) {
		this.title = title;
		this.description = description;
		this.psize = psize;
		this.pbase = pbase;
		this.ptopping = ptopping;
		this.psizeS = psizeS;
		this.pbaseS = pbaseS;
		this.ptoppingS = ptoppingS;
		this.published = published;
	}

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public String getPSize() {
		return psize;
	}

	public String getPBase() {
		return pbase;
	}

	public String getPTopping() {
		return ptopping;
	}

	public String getPSizeS() {
		return psizeS;
	}

	public String getPBaseS() {
		return pbaseS;
	}

	public String getPToppingS() {
		return ptoppingS;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setTopping(String ptopping) {
		this.ptopping = ptopping;
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
