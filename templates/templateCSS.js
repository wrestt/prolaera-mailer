const css = `
@media
only screen and (max-width: 600px),
(min-device-width: 600px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr {
		display: block;
	}

	.emailHeader td {
		width: 100%;
	}

	.emailHeader td img {
		margin-left: auto;
		margin-right: auto;
	}

	.subHeader {
		display: relative;
	}

	.report td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
    position: relative;
    text-align: center;
	}

	.report td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
	}
	
	.customButton:hover {
		color:black;
		
	}
}
	`.trim();

export default css;
