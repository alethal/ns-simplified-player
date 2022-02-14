import { isIE } from "react-device-detect";
import { isEqual, xor } from "lodash";
import { measureHeight } from "react-div-100vh";
import ImageLoadingSkeleton from "../../components/ImageLoadingSkeleton/ImageLoadingSkeleton";
import React from "react";
import moment from "moment";

export const areArraysEqual = (array1, array2) => {
	let areEqual = array1.length === array2.length;
	if (areEqual) {
		areEqual = xor(array1, array2).length === 0;
	}

	return areEqual;
};

export const areObjectsEqual = (object1, object2) => {
	return isEqual(object1, object2);
};

export const parseLocalData = (response) => {
	const { default: path } = response;
	return loadXMLDoc(path);
};

export const loadXMLDoc = (filename) => {
	if (filename.startsWith("http://localhost")) {
		const split = filename.split("/");
		return import(`../../xmls/${split.pop()}`).then(parseLocalData);
	} else {
		return new Promise((resolve, reject) => {
			const xhttp = new XMLHttpRequest();
			xhttp.open("GET", filename, true);
			if (isIE) {
				try {
					xhttp.responseType = "msxml-document";
				} catch (err) {}
			}

			xhttp.onload = () => {
				if (xhttp.status >= 200 && xhttp.status < 300) {
					let xml = xhttp.responseXML;
					if (!xml) {
						var parser = new DOMParser();
						xml = parser.parseFromString(xhttp.responseText, "application/xml");
					}
					resolve({
						xml,
						xhttp,
					});
				} else {
					reject({
						status: xhttp.status,
						statusText: xhttp.statusText,
					});
				}
			};
			xhttp.onerror = () => {
				reject({
					status: xhttp.status,
					statusText: xhttp.statusText,
				});
			};
			xhttp.send("");
		});
	}
};

export const createAppendableXmlChild = async (xmlFile, xslFile) => {
	const { xml } = await loadXMLDoc(xmlFile);
	const { xml: xsl, xhttp } = await loadXMLDoc(xslFile);
	let newEl;
	if (window.ActiveXObject || xhttp.responseType === "msxml-document") {
		newEl = xml.transformNode(xsl);
	} else if (document.implementation && document.implementation.createDocument) {
		const xsltProcessor = new XSLTProcessor();
		xsltProcessor.importStylesheet(xsl);
		newEl = xsltProcessor.transformToFragment(xml, document);
	}
	return newEl;
};

export const convertSecondsToTime = (seconds) => {
	let minutes = Math.trunc(seconds / 60);
	seconds = seconds - minutes * 60;
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	return `${minutes}:${seconds}`;
};

export const openNewBrowserTab = (url) => {
	window.open(url, "_blank");
};

export const getMiddleSectionHeight = (removeHeader, removeActions) => {
	let full;
	if (!isWeb()) {
		full = measureHeight();
		if (removeHeader) {
			full -= 60;
		}
		if (removeActions) {
			full -= 52;
		}
	}

	return full;
};

export const renderFakePlaceHolder = (i, className) => {
	return <ImageLoadingSkeleton key={i} className={className} />;
};

export const renderFakePlaceholders = (itemsCount, className) => {
	const placeholders = [];
	for (let i = 0; i < itemsCount; i++) {
		placeholders.push(renderFakePlaceHolder(i, className));
	}
	return placeholders;
};

export const generateStarringText = (stars) => {
	let text = "";
	if (stars.length) {
		text = stars.reduce(starNamesReducer, "");
	}

	return text;
};

export const starNamesReducer = (result, { name }, index) => {
	let finalResult;
	if (index) {
		finalResult = `${result}, ${name}`;
	} else {
		finalResult = name;
	}

	return finalResult;
};

export const stopEvent = (event) => {
	event.preventDefault();
	event.stopPropagation();
};

export const removeSpecialCharacters = (text, removeSpaces, removeBackSlashes) => {
	if (text) {
		let replace = text.trim().replace(/\//g, removeBackSlashes ? "" : "_");
		replace = replace.replace(/ /g, removeSpaces ? "" : "-");
		replace = replace.replace(/:/g, "");
		return replace.toLowerCase();
	}
	return text;
};

export const clearSpecialCharactersReplacements = (text) => {
	return text.replace(/-/g, " ").replace(/_/g, "/");
};

export const stringToSlug = (text) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w\-/]+/g, "")
		.replace(/(-)(?=.*\1)/g, "");
};

export const convertRunTimeToSeconds = (runTime) => {
	return moment.duration(runTime).asSeconds();
};

export const matchMediaRule = (rule) => {
	return window.matchMedia(`(${rule})`).matches;
};

export const isWeb = () => matchMediaRule("min-width: 1024px");

export const joinClasses = (...classes) => {
	const allClasses = [];
	for (let i = 0; i < classes.length; i++) {
		if (classes[i]) {
			allClasses.push(classes[i]);
		}
	}

	return allClasses.join(" ");
};

export const getRandomIndex = (itemCount) => {
	return Math.floor(Math.random() * itemCount);
};

export const matchById = (matchId, { id }) => matchId === id;

export const compareByKey = (key) => {
	return (current, next) => {
		if (current[key] > next[key]) return 1;
		if (current[key] < next[key]) return -1;
		return 0;
	};
};

export const getFontSizeBasedOnTextLength = (text = "", maxFontSize, minFontSize) => {
	const result = (maxFontSize * 10) / (text?.length / 1.25);
	if (result < minFontSize) return minFontSize;
	if (result > maxFontSize) return maxFontSize;
	return result;
};

export const isToday = (date) => {
	const newDate = new Date(date);
	const today = new Date();
	const day = newDate.getDate();
	const month = newDate.getMonth();
	const year = newDate.getFullYear();
	const todayDay = today.getDate();
	const todayMonth = today.getMonth();
	const todayYear = today.getFullYear();
	return year === todayYear && month === todayMonth && day === todayDay;
};
