<%--
  Created by IntelliJ IDEA.
  User: tom
  Date: 5/23/14
  Time: 9:34 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:set var="baseAppUrl" value="<%= AppSupport.getBaseAppURL(request) %>"/>
<html>
<head>
    <title>Example Filter List Edit Page</title>
    <%@include file="../../../../global_js.jsp"%>
    <%@include file="../../../../global_css.jspf"%>
    <link rel="stylesheet" type="text/css" href="${baseAppUrl}themes/css/home.css?build=${buildNumber}">
    <style type="text/css">
        h3 {
            padding-left: 15px;
        }
        @media screen and (max-width: 700px) {
            * {
                font-size: 11px !important;
            }
            .wide-mode.liquid [class*="span"]:not(input):not(select):not(textarea) {
                margin: 5px;
            }
        }


    </style>
</head>
<body>

<div class="filter">
    <h3>Filter</h3>
    <div class="service_catalog_serviceTemplateFilter_edit wide-mode"><!-- start of template: "#service_catalog_serviceTemplateFilter_edit" -->

        <span class="label">Type:</span>
        <select name="type" style="visibility: visible;">
            <option value="">All</option>

            <option value="OfficeVisit">Office Visit</option>
            <option value="OutpatientServices">Outpatient Services</option>
            <option value="DiagnosticTest">Diagnostic Test</option>

            <option value="Admission">Admission</option>

            <option value="DME">DME</option>
            <option value="Supplies">Supplies</option>

            <option value="HomeHealthcareHourly">Home Health Care - Hourly</option>
            <option value="HomeHealthcareVisits">Home Health Care - Visits</option>

            <option value="Ongoing">Ongoing</option>

            <option value="Transportation">Transportation</option>
            <option value="Lab" selected="selected">Lab</option>
        </select>

        <span class="label">Reporting Type:</span>
        <select name="reportingTypeID" style="visibility: visible;">
            <option value="">All</option>

            <option value="1125363690">Group Home/Assisted Living</option>

            <option value="1125363691">Hospice Inpatient Facility</option>

            <option value="1125363692">Hospital Inpatient Facility</option>

            <option value="1125363693">Skilled Nursing Facility</option>

            <option value="1125363694">Outpatient Facility</option>

            <option value="1125363695">Physician Services</option>

            <option value="1125363696">Outpatient Specialist - General</option>

            <option value="1125363697">Home Health</option>

            <option value="1125363698">In House</option>

            <option value="1125363699">Prescription Drugs</option>

            <option value="1125363700">DME</option>

            <option value="1125363701">Transportation</option>

            <option value="1134965690">Outpatient Specialist - Adolescent/Pediatric</option>

            <option value="1134965691">Outpatient - Alcohol/Drug</option>

            <option value="1134965692">Outpatient Specialist - Dentistry</option>

            <option value="1134965693">Outpatient Specialist - Diagnostic</option>

            <option value="1134965694">Outpatient Specialist - Diagnostic Allergy/Immunolgy</option>

            <option value="1134965695">Outpatient Specialist - Diagnostic Blood</option>

            <option value="1134965696">Outpatient Specialist - Diagnostic, Lab, X-ray</option>

            <option value="1134965697">Outpatient Specialist - Disease Management</option>

            <option value="1134965698">Outpatient Specialist - Emergency Medicine</option>

            <option value="1134965699">Outpatient Specialist - Medicine</option>

            <option value="1134965700">Outpatient Specialist - Medical Research</option>

            <option value="1134965701">Outpatient Specialist - Mental Health/Psychiatric</option>

            <option value="1134965702">Outpatient Specialist - Miscellaneous</option>

            <option value="1134965703">Outpatient Specialist - Pathology</option>

            <option value="1134965704">Outpatient Specialist - Podiatry</option>

            <option value="1134965705">Outpatient Specialist - Radiology</option>

            <option value="1134965706">Outpatient Specialist - Surgery</option>

            <option value="1134965707">Outpatient Specialist - Vision/Hearing</option>

            <option value="1134965708">Primary Care</option>

            <option value="1134965709">Outpatient Other</option>

            <option value="1134965710">Outpatient Rehab, Physical, and Occupational Therapy</option>

            <option value="1134965711">Outpatient Physician Specialist - Pediatric</option>

            <option value="1134965713">Outpatient Physician Specialist</option>

            <option value="1134965714">Outpatient Physician Specialist - Miscellaneous</option>

            <option value="1134965715">Outpatient Mental Health</option>

        </select>



        <button class="view ui-button ui-button-text-only ui-state-default ui-corner-all">
            <span class="ui-button-text">View</span>
        </button>
        <button class="newServiceTemplate ui-button ui-button-text-only ui-state-default ui-corner-all">
            <span class="ui-button-text">New Service Template</span>
        </button>

        <input type="checkbox" name="showDetails" value="true" checked="checked"> Show Details

        <div style="display:inline-block">
            <form name="uploadCSV" class="uploadForm" method="POST" enctype="multipart/form-data" action="http://localhost/32/service/catalog/ServiceCatalog.jsp">
                <button class="uploadCSV ui-button ui-button-text-only ui-state-default ui-corner-all">
                    <span class="ui-button-text">Upload CSV</span>
                </button>
                <input type="file" name="uploadedFile">
            </form>
        </div>

        <!-- end of template: "#service_catalog_serviceTemplateFilter_edit" --></div>
</div>
<div class="list">
    <h3>List</h3>
    <table class="tablesorter">
        <thead>
            <tr>
                <th class="header">Seq</th>
                <th class="header">Active</th>

                <th class="header header_reportingSpecialty.reportingTypeDisplayName">Reporting Type</th>
                <th class="header header_reportingSpecialty.displayName">Specialty</th>

                <th class="header header_name">Name</th>
                <th class="header header_displayName">Display Name</th>

                <th class="header header_serviceTemplateType">Type</th>

                <th class="header header_description">Description</th>

                <th class="header header_serviceUnit">Unit</th>

                <th class="header header_codeType">Code Type</th>
                <th class="header header_code {sorter: 'text'}">Code</th>


                <th class="header header_orderable">Orderable</th>
                <th class="header header_authable">Authable</th>
                <th class="header header_authRequired">Auth Required</th>
                <th class="header">Default Order Details </th>
                <th class="header">Order Panel Service</th>
                <th class="header">Order Panel Required</th>
                <th class="header">Authable Service</th>
                <th class="header">Authable Preferred</th>
                <th class="header header_requireLpAttachment">LP Attachment</th>
                <th class="header">Requisition Type</th>
            </tr>
    </thead>
    <tbody>
        <tr class="default odd">
            <td>0</td>
            <td>Yes</td>
            <td>Outpatient Specialist - Diagnostic, Lab, X-ray</td>
            <td>Blood Banking</td>
            <td>Test</td>
            <td>Test</td>
            <td>Lab</td>
            <td></td>
            <td>Unit</td>
            <td></td>
            <td></td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Yes</td>
            <td>InHouse Lab</td>
        </tr>
        <tr class="default even">
            <td>1</td>
            <td>Yes</td>
            <td>Outpatient Specialist - Diagnostic, Lab, X-ray</td>
            <td>Bacteriology</td>
            <td>Test2</td>
            <td>Test2</td>
            <td>Lab</td>
            <td></td>
            <td>Unit</td>
            <td></td>
            <td></td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Yes</td>
            <td>Lab Order</td>
        </tr>
    </tbody>
</table>
</div>
<div class="edit">
    <h3>Edit</h3>
    <fieldset class="wide-mode liquid">
        <div class="row">
            <label class="span2">Specialty</label>
            <div class="inputcontent span6">
        <select name="reportingSpecialtyID" class="vf vf-required vf-validated" style="visibility: visible;">
        <option value="">-- Specify --</option>

        <optgroup label="Group Home/Assisted Living">

            <option value="1125363702">Assisted Living LTC</option>

            <option value="1125363703">Group Home LTC</option>

            <option value="1125363704">Respite Care</option>

        </optgroup>

        <optgroup label="Hospice Inpatient Facility">

            <option value="1125363705">Symptom Control</option>

            <option value="1125363706">Long Term Care</option>

        </optgroup>

        <optgroup label="Hospital Inpatient Facility">

            <option value="1125363707">Cardiac</option>

            <option value="1125363708">Med/Surg</option>

            <option value="1134965733">Surgical, Minor</option>

            <option value="1134965735">Alcoholism/Substance Abuse Inpatient</option>

            <option value="1134965736">General Hospital (Article 28)</option>

            <option value="1134965737">OMH Psych Ctr/Oasas ASA Inpatient</option>

            <option value="1134965738">Private Psych &amp; ASA Inpatient</option>

            <option value="1134965967">Mental Health Inpatient</option>

            <option value="1134971698">ICU/CCU</option>

        </optgroup>

        <optgroup label="Skilled Nursing Facility">

            <option value="1125363710">Hospital Subacute</option>

            <option value="1125363711">Skilled Care</option>

            <option value="1125363712">Long Term/Intermediate Care</option>

            <option value="1125363713">Respite Care</option>

            <option value="1125363714">Hospice Care</option>

        </optgroup>

        <optgroup label="Outpatient Facility">

            <option value="1125363715">ER Facility</option>

            <option value="1125363717">Outpatient Chemotherapy</option>

            <option value="1125363718">Outpatient Lab</option>

            <option value="1125363719">Outpatient Observation</option>

            <option value="1125363720">Outpatient Radiation Oncology</option>

            <option value="1125363721">Outpatient Radiology</option>

            <option value="1125363722">Outpatient Surgery</option>

            <option value="1125363723">Outpatient Drug and Alcohol Therapy</option>

            <option value="1125363724">Outpatient Mental Health</option>

            <option value="1125363725">Outpatient Other</option>

            <option value="1134965717">Critical Care Med - Anesthesiologist</option>

            <option value="1134965718">Critical Care Medicine - Internal</option>

            <option value="1134965719">Critical Care Medicine - Obstetrics</option>

            <option value="1134965720">Critical Care Medicine - Surgery</option>

            <option value="1134965874">AIDS Day Health Care Services</option>

            <option value="1134971690">Heart Transplant Program</option>

            <option value="1134971691">Heart/Lung Transplant Program</option>

            <option value="1134971692">Kidney Transplant Program</option>

            <option value="1134971693">Liver Transplant Program</option>

            <option value="1134971694">Lung Transplant Program</option>

            <option value="1134971695">Pancreas Transplant Program</option>

            <option value="1134971696">Mammography</option>

            <option value="1134971697">Outpatient Dialysis</option>

        </optgroup>

        <optgroup label="Physician Services">

            <option value="1125363726">ER Services</option>

            <option value="1125363728">ESRD Treatment</option>

            <option value="1125363729">Home Visits</option>

            <option value="1125363730">Inpatient Visits</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - General">

            <option value="1125363762">Nursing</option>

            <option value="1125363763">Other</option>

            <option value="1125363765">Pain Management</option>

            <option value="1125363770">Speech Pathology</option>

            <option value="1134965748">Hematology - Internal Med</option>

            <option value="1134965778">Hematology - PSC Path</option>

            <option value="1134965811">Pain Management-Psychiatry &amp; Neurology</option>

            <option value="1134965825">Hospitalist</option>

            <option value="1134965856">Clozapine Case Manager - Clinic</option>

            <option value="1134965857">Comprehensive Specialty Clinic Services</option>

            <option value="1134965972">Institutional LTC</option>

            <option value="1134965973">Non Institutional LTC</option>

            <option value="1134965998">Public Health</option>

            <option value="1134966092">All Physician</option>

        </optgroup>

        <optgroup label="Home Health">

            <option value="1125363774">Homemaker</option>

            <option value="1125363775">Hospice Homecare</option>

            <option value="1125363776">Meals</option>

            <option value="1125363777">Medical Supplies</option>

            <option value="1125363778">Nursing Services</option>

            <option value="1125363779">Occupational Therapy</option>

            <option value="1125363780">Physical Therapy</option>

            <option value="1125363781">Social Services</option>

            <option value="1125363782">Level 3: Home Health Care Aide</option>

            <option value="1125363783">Personal Care: Level 1</option>

            <option value="1125363784">Personal Care: Level 2</option>

            <option value="1125363785">Speech Therapy</option>

            <option value="1125363786">Respiratory Therapy</option>

            <option value="1125363787">Social and Environmental Supports</option>

            <option value="1125363788">Nutrition</option>

            <option value="1134965721">No Specialty Required</option>

            <option value="1134966098">Long Term Home Health</option>

        </optgroup>

        <optgroup label="In House">

            <option value="1125363789">Primary Care Physician</option>

            <option value="1125363790">Registered Nurse</option>

            <option value="1125363791">Social Worker</option>

            <option value="1125363792">Physical Therapy</option>

            <option value="1125363793">Occupational Therapy</option>

            <option value="1125363794">Recreational Therapy</option>

            <option value="1125363795">Dietitian</option>

            <option value="1125363796">Pace Center Manager</option>

            <option value="1125363797">Home Care Coordinator</option>

            <option value="1125363798">Personal Care Attendant</option>

            <option value="1125363799">Driver or Representative</option>

            <option value="1125363800">Adult Day Health Care</option>

            <option value="1125363801">Social Day Care</option>

            <option value="1134965716">Clinical Social Worker</option>

        </optgroup>

        <optgroup label="Prescription Drugs">

            <option value="1125363802">Disbursed Pharmacy</option>

            <option value="1125363803">Nursing Home Rx</option>

            <option value="1125363804">Other Rx</option>

            <option value="1125363805">Purchased Pharmacy</option>

        </optgroup>

        <optgroup label="DME">

            <option value="1125363806">Beds/Mattresses</option>

            <option value="1125363807">Chairs</option>

            <option value="1125363808">Other</option>

            <option value="1125363809">Oxygen/Respiratory Devices</option>

            <option value="1125363810">Prosthetics/Orthotics</option>

            <option value="1125363811">Dental Hardware</option>

            <option value="1125363812">Personal Emergency Response System (PERS)</option>

            <option value="1125363813">Speech/Hearing Hardware</option>

            <option value="1125363814">Vision Hardware</option>

        </optgroup>

        <optgroup label="Transportation">

            <option value="1125363815">Ambulance</option>

            <option value="1125363816">Non-Emergency Transportation</option>

            <option value="1134965981">Regional Perinatal Transportation Prov</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Adolescent/Pediatric">

            <option value="1134965743">Behavioral Pediatrics</option>

            <option value="1134965793">Preferred Physicians and Children Prog</option>

            <option value="1134965812">Child Psychiatry</option>

            <option value="1134965813">Child Neurology</option>

            <option value="1134965847">OMH Child Clinic(State Opr)</option>

            <option value="1134965852">OMH Child Clinic</option>

            <option value="1134965863">OMH/Cr Children (Voluntary)</option>

            <option value="1134965866">OMH/Cr Children (State Opr)</option>

            <option value="1134965995">Pedodontist</option>

            <option value="1134966054">Outpt Chem Dependency Prog For Youth</option>

            <option value="1134966058">Child Psychiatry - Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient - Alcohol/Drug">

            <option value="1134965845">Medically Supervised Substance Abuse</option>

            <option value="1134965876">Outpatient Chemical Dependence Withdrawl</option>

            <option value="1134966047">Alcoholism Treatment Program</option>

            <option value="1134966077">Alcoholism Clinic Treatment (State Opr)</option>

            <option value="1134966078">Alcoholism Day Rehab (State Opr)</option>

            <option value="1134966079">Alcoholism Clinic Treatment</option>

            <option value="1134966080">Alcoholism Day Rehabiliation</option>

            <option value="1134966081">Comprehensive Alcoholism Care</option>

            <option value="1134966096">Certified Drug &amp; Alcohol Counselor</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Dentistry">

            <option value="1125363753">Dental</option>

            <option value="1134965832">Managed Care - Dental Enhanced Fee</option>

            <option value="1134965869">PPCP Associated Dental Clinic - Oral Surgery</option>

            <option value="1134965870">PPCP Associated Dental Clinic - General Dentistry</option>

            <option value="1134965992">Orthodonture</option>

            <option value="1134965993">Endodontist</option>

            <option value="1134965994">Oral Pathologist</option>

            <option value="1134965996">Prosthodontist</option>

            <option value="1134965997">Periodontist</option>

            <option value="1134965999">Dental Anesthesiologist</option>

            <option value="1134966002">Dentist - Family</option>

            <option value="1134966012">General Dentistry - Clinic Specialty</option>

            <option value="1134966013">Orthodontics</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Diagnostic">

            <option value="1134965752">Medical Toxicology</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Diagnostic Allergy/Immunolgy">

            <option value="1125363750">Allergy/Immunolgy</option>

            <option value="1134966016">Allergy</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Diagnostic Blood">

            <option value="1134966027">Hematology- Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Diagnostic, Lab, X-ray">

        <option value="1134965722">Forensic Pathology</option>

        <option value="1134965723">Chemical Pathology</option>

        <option value="1134965724">Anatomic Pathology</option>

        <option value="1134965725">Pediatric Pathology</option>

        <option value="1134965726">Pathology with Molecular Genetic Spec</option>

        <option value="1134965727">Anatomic and Clinical Pathology</option>

        <option value="1134965728">Radioisotopic Pathology</option>

        <option value="1134965729">Pathology Spc 530</option>

        <option value="1134965730">Histopathology - General/Oral/Dermatopathalgy</option>

        <option value="1134965731">Pathology Spc 532</option>

        <option value="1134965732">Pathology Spc 533</option>

        <option value="1134965755">Nuclear Medicine</option>

        <option value="1134965756">Medical Nuclear Physics</option>

        <option value="1134965772">CLIA Registration/Compliance/Accreditation</option>

        <option value="1134965773">CLIA Waiver</option>

        <option value="1134965774">CLIA Physician Performed Microscopy Procedure</option>

        <option value="1134965775">CLIA Waiver/Registration</option>

        <option value="1134965776" selected="selected">Blood Banking</option>

        <option value="1134965777">Cytopathology</option>

        <option value="1134965779">Medical Microbiology</option>

        <option value="1134965810">Molecular Genetic Pathology</option>

        <option value="1134965819">Diagnostic Radiology</option>

        <option value="1134965820">Diagnostic Roentgenology</option>

        <option value="1134965821">Therapeutic Radiology</option>

        <option value="1134965822">Radiological Physics</option>

        <option value="1134965823">Therapeutic Radiological Physics</option>

        <option value="1134965824">Diagnostic Radiological Physics</option>

        <option value="1134965887">Bacteriology</option>

        <option value="1134965888">Bacteriology - General</option>

        <option value="1134965889">Bacteriology - Limited</option>

        <option value="1134965890">Bacteriology - Aerobes Only</option>

        <option value="1134965891">Bacteriology - Neisseria Gonorrhoeae Screeng</option>

        <option value="1134965892">Bacterology - GC Smears Only</option>

        <option value="1134965893">Bacteriology-Restricted (Dental)</option>

        <option value="1134965894">Mycobacteriology - Smears and Culture</option>

        <option value="1134965895">Mycobacteriology - General</option>

        <option value="1134965896">Mycobacteriology - Limited</option>

        <option value="1134965897">Mycobacteriology - Smears Only</option>

        <option value="1134965898">Diagnostic Immunology - Comprehensive</option>

        <option value="1134965899">Diagnostic Immunology - Other</option>

        <option value="1134965900">Diagnostic Immunology - General/Limited</option>

        <option value="1134965901">Diagnostic Immunology - Special</option>

        <option value="1134965902">Human Immunodeficiency Virus - Restricted A</option>

        <option value="1134965903">Human Immunodeficiency Virus - Restricted B</option>

        <option value="1134965904">Human Immunodeficiency Virus - Comprehensive</option>

        <option value="1134965905">Serology - Routine</option>

        <option value="1134965906">Serology - Limited</option>

        <option value="1134965907">Cellular Immunology - Limited I</option>

        <option value="1134965908">Cellular Immunology - Limited II</option>

        <option value="1134965909">Serolgy - Other</option>

        <option value="1134965910">Cellular Immunology - General</option>

        <option value="1134965911">Cellular Immunology - Limited III</option>

        <option value="1134965912">Virology - General I Or General II</option>

        <option value="1134965913">Virology - Limited</option>

        <option value="1134965914">Virology - Restricted</option>

        <option value="1134965915">Mycology - General</option>

        <option value="1134965916">Mycology - Limited (Yeast Only)</option>

        <option value="1134965917">Parasitology</option>

        <option value="1134965918">Parasitology - Stool</option>

        <option value="1134965919">Parasitology - Other</option>

        <option value="1134965920">Parasitology - Blood</option>

        <option value="1134965921">Urine Pregnancy Testing</option>

        <option value="1134965922">Hematology - Comprehensive</option>

        <option value="1134965923">Hematology - General</option>

        <option value="1134965924">Hematology - Coagulation Only</option>

        <option value="1134965925">Hematology - Limited</option>

        <option value="1134965926">Hematology - Other</option>

        <option value="1134965927">Cytohematology - Limited/Diagnostic</option>

        <option value="1134965928">Immunohematology</option>

        <option value="1134965929">Blood Services - Diagnostic Immunohematology</option>

        <option value="1134965930">Immunohematology Spc 492</option>

        <option value="1134965931">Immunohematology Spc 493</option>

        <option value="1134965932">Clinical Chemistry - General</option>

        <option value="1134965933">Clinical Chemistry - Limited</option>

        <option value="1134965934">Toxicology - Erythrocyte Protoporphyrin-Hemat</option>

        <option value="1134965935">Toxicology - Erythrocyte Protoporhyrin-Extrct</option>

        <option value="1134965936">Toxicology - Drug Analysis-Qual (Or Forensic)</option>

        <option value="1134965937">Toxicology - Blood Lead</option>

        <option value="1134965938">Endocrinology</option>

        <option value="1134965939">Chem Limit</option>

        <option value="1134965940">Qualitative Toxicology - Rehabilitation Progs</option>

        <option value="1134965941">Chem Reserv</option>

        <option value="1134965942">Chem All</option>

        <option value="1134965943">Blood Ph and Gases</option>

        <option value="1134965944">Chem IMD</option>

        <option value="1134965945">Therapeutic Substance Monitoring/Quan Toxicol</option>

        <option value="1134965946">Urinalysis</option>

        <option value="1134965947">Oncofetal Antigen - General</option>

        <option value="1134965948">Oncofetal Antigen - Limited</option>

        <option value="1134965949">Oncofetal Antigen - General, Sera Only</option>

        <option value="1134965950">Oncofetal Antigen - General, Amniotic Fluid Only</option>

        <option value="1134965951">Genetic Testing</option>

        <option value="1134965952">Blood Transfusion Collection</option>

        <option value="1134965953">Blood Transfusion</option>

        <option value="1134965954">Cytogenetics - General</option>

        <option value="1134965955">Cytogenetics - Limited</option>

        <option value="1134965956">Cytogenetics - Hematological Disorders</option>

        <option value="1134965957">Miscellaneous His</option>

        <option value="1134965958">Miscellaneous Limited His</option>

        <option value="1134965960">Histocompatibility - Limited</option>

        <option value="1134965961">Miscellaneous Clinic Chem</option>

        <option value="1134965962">Miscellaneous Specialty Test</option>

        <option value="1134965979">Portable X-Ray Companies</option>

        <option value="1134965980">Independent Physiological Labs</option>

        <option value="1134966087">Blood Products (Ordered Ambulatory)</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Disease Management">

            <option value="1125363768">Pulmonary Disease</option>

            <option value="1134965747">Cardiovascular Disease</option>

            <option value="1134965763">Certified Diabetes Educator</option>

            <option value="1134965782">Transplant Hepatology</option>

            <option value="1134966006">Diabetes</option>

            <option value="1134966017">Arthritis</option>

            <option value="1134966059">Tuberculosis- Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Emergency Medicine">

            <option value="1134965963">Sports Medicine - Emergency</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Medicine">

            <option value="1125363716">Outpatient Cardiology</option>

            <option value="1125363731">Anesthesiology</option>

            <option value="1125363733">Cardiology</option>

            <option value="1125363734">Dermatology</option>

            <option value="1125363735">Gastroenterology</option>

            <option value="1125363738">Nephrology</option>

            <option value="1125363739">Neurology</option>

            <option value="1125363740">Oncology</option>

            <option value="1125363743">Orthopaedics</option>

            <option value="1125363744">Pathology</option>

            <option value="1125363747">Radiation Oncology</option>

            <option value="1125363755">Endocrinology</option>

            <option value="1125363756">Gynecology/Oncology</option>

            <option value="1125363757">Hematology</option>

            <option value="1125363758">Hematology/Oncology</option>

            <option value="1125363759">Infectious Disease</option>

            <option value="1125363764">Otolaryngology</option>

            <option value="1125363766">Physical Medicine / Rehab</option>

            <option value="1125363767">Psychology</option>

            <option value="1125363769">Rheumatology</option>

            <option value="1134965759">Neurotology</option>

            <option value="1134965762">Reproductive Endocrinology</option>

            <option value="1134965781">Dermatopathology - PSC Path</option>

            <option value="1134965827">Vascular Neurology</option>

            <option value="1134965828">Vascular Medicine</option>

            <option value="1134965970">Cardio-Thoracic</option>

            <option value="1134965971">Intervention Cardiology</option>

            <option value="1134966018">Rheumatology - Clinic Specialty</option>

            <option value="1134966028">Pulmonary-Clinic Specialty</option>

            <option value="1134966029">Gastroenterology - Clinic Specialty</option>

            <option value="1134966030">Neurology- Clinic Specialty</option>

            <option value="1134966048">Orthopedic- Clinic Specialty</option>

            <option value="1134966050">Nephrology - Clinic Specialty</option>

            <option value="1134966052">Dermatology - Clinic Specialty</option>

            <option value="1134966060">Infectious Diseases - Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Medical Research">

            <option value="1134965800">Clinical Molecular Genetics</option>

            <option value="1134965801">Clinical Biochemical Genetics</option>

            <option value="1134965808">Medical Genetics</option>

            <option value="1134965809">Clinical Genetics</option>

            <option value="1134966074">Diag and Research Clinic MR (State Opr)</option>

            <option value="1134966088">Genetic Counseling (Ordered Ambulatory)</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Mental Health/Psychiatric">

            <option value="1125363709">Psychiatric</option>

            <option value="1125363746">Psychiatry</option>

            <option value="1134965814">Psychiatry &amp; Neurology</option>

            <option value="1134965815">Clozapine Case Manager - Psych</option>

            <option value="1134965816">Geriatric Psychiatry</option>

            <option value="1134965817">Addiction Psychiatry</option>

            <option value="1134965846">OMH Adult Clinic (State Opr)</option>

            <option value="1134965848">OMH Continuing Day Trtmt (State Opr)</option>

            <option value="1134965849">OMH Partial Hospitalization (State Opr)</option>

            <option value="1134965850">OMH Inten Psych Rehab Trtmt (State Opr)</option>

            <option value="1134965851">OMH Adult Clinic</option>

            <option value="1134965853">OMH Continuing Day Treatment</option>

            <option value="1134965854">OMH Partial Hospitalization</option>

            <option value="1134965855">OMH Intensive Psych Rehab Treatment</option>

            <option value="1134965858">OMH Comprehensive Outpatient Program (COPS) Clinic</option>

            <option value="1134965859">OMH Comp Outpat Prog (COPS) Continuing Day Trtmt</option>

            <option value="1134965862">OMH/Cr Adult (Voluntary)</option>

            <option value="1134965864">OMH Family Based Treatment</option>

            <option value="1134965865">OMH/Cr Adult (State Opr)</option>

            <option value="1134965867">OMH Teaching Family Home</option>

            <option value="1134965868">OMR/DD Cr (State Opr)</option>

            <option value="1134965873">PPCP Associated Psychiatry, General</option>

            <option value="1134965879">MH Residential (Non-Inpatient)</option>

            <option value="1134965880">MH Outpatient (Non-Residential)</option>

            <option value="1134965881">Mental Health Practitioner</option>

            <option value="1134966043">Psychiatry - Individual</option>

            <option value="1134966044">Psychiatry - Group</option>

            <option value="1134966045">Psychiatry - Half Day Care</option>

            <option value="1134966046">Psychiatry - Full Day Care</option>

            <option value="1134966064">MH Clinic Treatment (State Opr)</option>

            <option value="1134966065">MH Day Treatment (State Opr)</option>

            <option value="1134966066">MH Continuing Treatment (State Opr)</option>

            <option value="1134966067">Mental Health Clinic Treatment</option>

            <option value="1134966068">Mental Health Day Treatment</option>

            <option value="1134966069">Mental Health Continuing Treatment</option>

            <option value="1134966082">Medically Supervised Withdrawal-Outpatient</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Miscellaneous">

            <option value="1125363727">SNF Services</option>

            <option value="1134965749">Spinal Cord Injury Medicine</option>

            <option value="1134965753">Undersea &amp; Hyperbaric Medicine</option>

            <option value="1134965757">Neuromuscular Medicine</option>

            <option value="1134965758">Neuroradiology</option>

            <option value="1134965794">Medicaid Obstetrical &amp; Maternal Svc Prog</option>

            <option value="1134965798">Medicaid Obsterical &amp; Maternal Services Prgm (Moms): Health Supportive Services</option>

            <option value="1134965802">Aerospace</option>

            <option value="1134965806">Aerospace Medicine</option>

            <option value="1134965807">T.B. Directly Observed Therapy/Physician</option>

            <option value="1134965818">Nerodevelopmental Disabilities</option>

            <option value="1134965833">HIV Primary Care Services</option>

            <option value="1134965838">Counselor</option>

            <option value="1134965840">AIDS/HIV Services</option>

            <option value="1134965844">HIV Primary Care Services - Clinic Specialty</option>

            <option value="1134965861">Early Intervention</option>

            <option value="1134965871">PPCP Associated Cops</option>

            <option value="1134965872">PPCP Associated OMH Clinics</option>

            <option value="1134965875">Home &amp; Community Based Service (HCBS) Waiver</option>

            <option value="1134965877">TBI Services</option>

            <option value="1134965878">Risperdal Consta Administration</option>

            <option value="1134965974">Prescription Footwear</option>

            <option value="1134965984">Methadone Maintenance (Physician)</option>

            <option value="1134965985">Methadone Maintenance Preferred Prov</option>

            <option value="1134965986">ASA Medically Monitored Withdrawal</option>

            <option value="1134966000">Parenteral Conscious Sedation</option>

            <option value="1134966023">Methadone Maintenance Treatment Program</option>

            <option value="1134966026">Hypertension - Clinic Specialty</option>

            <option value="1134966051">Genito-Urinary- Clinic Specialty</option>

            <option value="1134966070">MR/DD Clinic Treatment (State Opr) </option>

            <option value="1134966072">MR/DD Clinic Treatment</option>

            <option value="1134966073">T.B. Directly Observed Therapy/Clinic</option>

            <option value="1134966075">Apnea Center</option>

            <option value="1134966076">Specialty Clinic - Mental Retardation</option>

            <option value="1134966085">OMH Comprehensive Psychiatric Emergency Prog</option>

            <option value="1134966097">Clinical Cardiac Electrophysiology</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Pathology">

            <option value="1134965739">Dermatopathology</option>

            <option value="1134965780">Neuropathology</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Podiatry">

            <option value="1125363745">Podiatry</option>

            <option value="1134966019">Podiatrist Center</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Radiology">

            <option value="1125363748">Radiology</option>

            <option value="1134965830">Vascular&amp;Interventional Radiology</option>

            <option value="1134966032">Cancer Detection</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Surgery">

            <option value="1125363736">General Surgery</option>

            <option value="1125363741">Opthamology</option>

            <option value="1125363749">Urology</option>

            <option value="1125363752">Colorectal Surgery</option>

            <option value="1125363754">Dental-Oral Surgery</option>

            <option value="1125363761">Neurosurgery</option>

            <option value="1125363771">Surgical Oncology</option>

            <option value="1125363772">Thoracic Surgery</option>

            <option value="1125363773">Vascular Surgery</option>

            <option value="1134965767">Hand Surgery - Orthopedic Surgery</option>

            <option value="1134965768">Hand Surgery - Plastic Surgery</option>

            <option value="1134965769">Hand Surgery - Surgery</option>

            <option value="1134965770">Plastic Surgery with the Head &amp; Neck</option>

            <option value="1134965799">Plastic Surgery</option>

            <option value="1134965982">Transplant Surgery</option>

            <option value="1134966001">Maxillofacial Surgery</option>

            <option value="1134966011">Oral Surgery - Clinic Specialty</option>

            <option value="1134966031">Neurosurgery - Clinic Specialty</option>

            <option value="1134966033">Ear, Nose &amp; Throat- Clinic Specialty</option>

            <option value="1134966049">Urology - Clinic Specialty</option>

            <option value="1134966053">Opthalmology - Clinic Specialty</option>

            <option value="1134966090">Operating Room (Ordered Ambulatory)</option>

            <option value="1134966091">Surgical, General</option>

            <option value="2134966031">Neurosurgery- Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient Specialist - Vision/Hearing">

            <option value="1125363732">Audiology</option>

            <option value="1125363742">Optometry</option>

            <option value="1134965975">Low Vision Specialist</option>

            <option value="1134965976">Optician/Contact Lens Privilge</option>

            <option value="1134965977">Optometrist/Diagnostic Pharmeuticals</option>

            <option value="1134966020">Eye/Vision Center</option>

            <option value="1134966089">Hearing Services (Ordered Ambulatory)</option>

            <option value="1134966099">Other Vision Care</option>

        </optgroup>

        <optgroup label="Primary Care">

            <option value="1125363737">Gynecology</option>

            <option value="1125363760">Internal Medicine</option>

            <option value="1134965740">Family Practice</option>

            <option value="1134965741">Adolescent Medicine: Family Medicine</option>

            <option value="1134965742">Adolescent Medicine: Pediatrics</option>

            <option value="1134965744">Internal Medicine and Pediatrics</option>

            <option value="1134965760">Obstetrics and Gynecology</option>

            <option value="1134965761">Maternal and Fetal Medicine</option>

            <option value="1134965785">Pediatrics</option>

            <option value="1134965803">General Preventive Medicine</option>

            <option value="1134965805">Public Health - Preventive Medicine</option>

            <option value="1134965831">Managed Care - Physician Enhanced Fee</option>

            <option value="1134965834">Primary Care Initiative in Underserved Areas</option>

            <option value="1134965835">Specialsts Primary Care Init - Undersrvd Area</option>

            <option value="1134965836">Specialists in Physicians Case Mgmt Program</option>

            <option value="1134965843">School Supportive Health Services Program</option>

            <option value="1134965860">Pre-School Supportive Health Care</option>

            <option value="1134965964">Sports Medicine - Family Medicine</option>

            <option value="1134965965">Sports Medicine - Internal</option>

            <option value="1134965968">Geriatrics - Family Medicine</option>

            <option value="1134965969">Geriatrics - Internal</option>

            <option value="1134965988">General Practice Only - No Spec</option>

            <option value="1134965989">Nurse Practitioner</option>

            <option value="1134965990">Nurse Midwives</option>

            <option value="1134966003">PCCM Enhancement</option>

            <option value="1134966004">PCCM Quality Enhancement</option>

            <option value="1134966007">Obstetrics</option>

            <option value="1134966008">Family Planning</option>

            <option value="1134966009">Abortion</option>

            <option value="1134966010">Child Health Assurance Program (CHAP)</option>

            <option value="1134966015">General Medicine - Clinic Specialty</option>

            <option value="1134966034">Pediatric General Medicine- Clinic Specialty</option>

            <option value="1134966071">Preferred Primary Care Clinic</option>

            <option value="1134966083">Comp Physical Exam (School Health Proj)</option>

            <option value="1134966084">Routine Visit (School Health Project)</option>

            <option value="1134966094">Case Management</option>

        </optgroup>

        <optgroup label="Outpatient Other">

            <option value="1125363751">Chiropractic</option>

            <option value="1134965734">Miscellaneous Miscellaneous</option>

            <option value="1134965765">Certified Asthma Educator</option>

            <option value="1134965766">Orthopedic Surgery</option>

            <option value="1134965837">Child Health Assurance Program</option>

            <option value="1134965839">Acupuncturist</option>

            <option value="1134965882">Microbiology</option>

            <option value="1134965883">FQ Out-Of-State (Non-CMMA)</option>

            <option value="1134965884">FQ Primary</option>

            <option value="1134965885">FQ Secondary</option>

            <option value="1134965886">FQ Authorized</option>

            <option value="1134965978">Inborn Metabolic Disease Center</option>

            <option value="1134965983">ASA General Outpatient</option>

            <option value="1134965987">All Specialities</option>

            <option value="1134965991">S/HMO (Elderplan)</option>

            <option value="1134966005">HMO Co-Payment</option>

            <option value="1134966014">Hemodialysis</option>

            <option value="1134966063">Nursing Home Hospital Daycare (No Claim)</option>

            <option value="1134966086">Hosp-Based/Freestanding Ambulat Surgery</option>

            <option value="1134966095">Cert Social Wkrs</option>

        </optgroup>

        <optgroup label="Outpatient Rehab, Physical, and Occupational Therapy">

            <option value="1134965745">Pediatric Rheumatology</option>

            <option value="1134965746">Pediatric Infectious Disease</option>

            <option value="1134965750">Pediatric Neurosurgery</option>

            <option value="1134965751">Pediatric Dermatology</option>

            <option value="1134965796">Osteopathic Manipulative Medicine</option>

            <option value="1134965804">Occupational Medicine</option>

            <option value="1134965841">Medical Rehab</option>

            <option value="1134966021">Physical Therapy - Clinic Specialty</option>

            <option value="1134966022">Speech Therapy - Clinic Specialty</option>

            <option value="1134966024">Occupational Therapy - Clinic Specialty</option>

            <option value="1134966025">Rehabilitation Medicine- Clinic Specialty</option>

            <option value="1134966061">Speech &amp; Hearing- Clinic Specialty</option>

            <option value="1134966062">Amputee Center</option>

            <option value="2134966022">Speech Therapy- Clinic Specialty</option>

            <option value="2134966024">Occupational Therapy- Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient Physician Specialist - Pediatric">

            <option value="1134965754">Pediatric Rehabilitation</option>

            <option value="1134965764">Pediatric Ophthalmology</option>

            <option value="1134965771">Pediatric Otolaryngology</option>

            <option value="1134965783">Pediatric Transplant Hepatology</option>

            <option value="1134965784">Pediatric Emergency Medicine</option>

            <option value="1134965786">Pediatric Cardiology</option>

            <option value="1134965787">Pediatric Hematology - Oncology</option>

            <option value="1134965788">Pediatric Surgery</option>

            <option value="1134965789">Pediatric Nephrology</option>

            <option value="1134965790">Pediatric Neonatal - Perinatal Medicine</option>

            <option value="1134965791">Pediatric Endocrinology</option>

            <option value="1134965792">Pediatric Pulmonology</option>

            <option value="1134965795">Pediatric Critical Care</option>

            <option value="1134965797">Pediatric Gastroentology</option>

            <option value="1134965826">Pediatric Urology</option>

            <option value="1134965829">Pediatric Radiology</option>

            <option value="1134965842">Pediatric Specialty - All Except Primary Care</option>

            <option value="1134965959">Nurse: Medically Fragile Children</option>

            <option value="1134965966">Sports Medicine - Pediatrics</option>

            <option value="1134966035">Pediatric Allergy- Clinic Specialty</option>

            <option value="1134966036">Pediatric Neurology- Clinic Specialty</option>

            <option value="1134966037">Pediatric Hematology- Clinic Specialty</option>

            <option value="1134966038">Pediatric Cardiac - Clinic Specialty</option>

            <option value="1134966039">Pediatric Renal- Clinic Specialty</option>

            <option value="1134966040">Pediatric Pulmonary- Clinic Specialty</option>

            <option value="1134966041">Pediatric Orthopedic- Clinic Specialty</option>

            <option value="1134966042">Pediatric Endocrine - Clinic Specialty</option>

            <option value="1134966055">Pediatric Dermatology - Clinic Specialty</option>

            <option value="1134966056">Pediatric Diabetes- Clinic Specialty</option>

            <option value="1134966057">Pediatric Surgery - Clinic Specialty</option>

        </optgroup>

        <optgroup label="Outpatient Physician Specialist">

        </optgroup>

        <optgroup label="Outpatient Physician Specialist - Miscellaneous">

        </optgroup>

        <optgroup label="Outpatient Mental Health">

        </optgroup>

        </select>
        </div>
        </div>

        <div class="row">
            <label class="span2">Name</label>
            <div class="inputcontent span6">
                <input name="name" value="Test" size="35" maxlength="45" class="vf vf-required vf-validated" placeholder="Name...">
            </div>
        </div>
        <div class="row">
            <label class="span2">Display Name</label>
            <div class="inputcontent span6">
                <input name="displayName" value="Test" size="35" maxlength="45" class="vf vf-required vf-validated" placeholder="Display name...">
            </div>
        </div>

        <div class="row">
            <label class="span2">Active</label>
            <div class="inputcontent span6 textOnly">
                <input type="checkbox" name="active" value="true" checked="checked">
            </div>
        </div>

        <div class="row">
            <label class="span2">Unit</label>
            <div class="inputcontent span6">
                <select name="serviceUnit" style="visibility: visible;">

                    <option value="Day">Day</option>

                    <option value="ServiceUnit" selected="selected">Unit</option>

                    <option value="Hour">Hour</option>

                    <option value="Month">Month</option>

                    <option value="Visit">Visit</option>

                </select>
            </div>
        </div>
        <div class="row">
            <label class="span2">Type</label>
            <div class="inputcontent span6">
                <select name="serviceTemplateType" style="visibility: visible;">

                    <option value="OfficeVisit">Office Visit</option>
                    <option value="OutpatientServices">Outpatient Services</option>
                    <option value="DiagnosticTest">Diagnostic Test</option>

                    <option value="Admission">Admission</option>

                    <option value="DME">DME</option>
                    <option value="Supplies">Supplies</option>

                    <option value="HomeHealthcareHourly">Home Health Care - Hourly</option>
                    <option value="HomeHealthcareVisits">Home Health Care - Visits</option>

                    <option value="Ongoing">Ongoing</option>

                    <option value="Transportation">Transportation</option>

                    <option value="Lab" selected="selected">Lab</option>

                </select>
            </div>
        </div>
        <div class="row">
            <label class="span2">Requisition Type</label>
            <div class="inputcontent span6">
                <select name="serviceTypeID" style="visibility: visible;">
                    <option value="">-- Select --</option>

                    <option value="2093674073170182148" selected="selected">InHouse Lab</option>

                    <option value="2127032358059180036">Nursing</option>

                    <option value="2141523896617205764">Lab Order 2</option>

                    <option value="2012572711">Contracted Service</option>

                    <option value="2012576699">Procurement</option>

                    <option value="2017821703">Admission</option>

                    <option value="2115363704">Homecare</option>

                    <option value="2038785011500515332">Lab Order</option>

                </select>
            </div>
        </div>
        <div class="row">
            <label class="span2">Service</label>
            <div class="inputcontent span6 textOnly">
                <input type="checkbox" name="orderable" value="true" class="checkAuthableTable" checked="checked"> Orderable
                <input type="checkbox" name="authable" value="true" class="checkAuthableTable"> Authorizable
            </div>
        </div>

        <div id="authRequiredDiv" class="row">
            <label class="span2">Authorization Required</label>
            <div class="inputcontent span6 textOnly">
                <input type="checkbox" name="authRequired" value="true" class="checkAuthableTable">
            </div>
        </div>
        <div id="defaultOrderDetailsDiv" class="row">
            <label class="span2">Default Order Details</label>
            <div class="inputcontent span6">
                <textarea name="defaultOrderDetails" rows="10" cols="65"></textarea>
            </div>
        </div>

        <div class="row">
            <label class="span2">Require LIFEplan Attachment</label>
            <div class="inputcontent span2 textOnly">
                <input type="checkbox" name="requireLpAttachment" value="true" checked="checked">
            </div>
        </div>

        <div class="row">
            <label class="span2">Description</label>
            <div class="inputcontent span6">
                <textarea name="description" rows="10" cols="65"></textarea>
            </div>
        </div>
    </fieldset>
</div>
</body>
</html>
