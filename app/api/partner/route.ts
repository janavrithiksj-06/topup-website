import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      partnershipType,

      // Contact
      name,
      company,
      phone,
      email,

      // General location
      city,
      state,

      // Location Partner
      propertyType,
      powerAvailability,
      propertySize,
      roadFrontage,
      googleMapsLocation,
      preferredModel,

      // Fleet Partner
      fleetType,
      vehicleCount,
      vehicleModels,
      operatingRoutes,
      currentChargingSetup,
      chargingLocations,
      chargingFrequency,

      // Franchise Partner
      franchiseType,
      investmentRange,
      preferredCity,
      preferredState,
      doYouHaveLocation,
      locationDetails,
      operationsExperience,

      // Network Partner
      infrastructureType,
      chargerCount,
      chargerCapacity,
      locations,
      currentNetwork,
      partnershipInterest,

      // General
      message,
    } = data;

    if (!partnershipType || !name || !email) {
      return NextResponse.json(
        {
          error: "Partnership type, name and email are required.",
        },
        { status: 400 }
      );
    }

    const subject = `[Topup] New ${partnershipType} Enquiry`;

    const details = `
      <h2>New Partnership Enquiry</h2>

      <p><strong>Partnership Type:</strong> ${partnershipType}</p>

      <hr>

      <h3>Contact Details</h3>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Company / Organisation:</strong> ${
        company || "Not provided"
      }</p>

      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

      <p><strong>Email:</strong> ${email}</p>

      ${
        city || state
          ? `
        <h3>Location</h3>

        <p><strong>City:</strong> ${city || "Not provided"}</p>

        <p><strong>State:</strong> ${state || "Not provided"}</p>
      `
          : ""
      }

      ${
        propertyType ||
        powerAvailability ||
        propertySize ||
        roadFrontage ||
        googleMapsLocation ||
        preferredModel
          ? `
        <h3>Location Partnership</h3>

        <p><strong>Property Type:</strong> ${
          propertyType || "Not provided"
        }</p>

        <p><strong>Power Availability:</strong> ${
          powerAvailability || "Not provided"
        }</p>

        <p><strong>Property Size:</strong> ${
          propertySize || "Not provided"
        }</p>

        <p><strong>Road Frontage:</strong> ${
          roadFrontage || "Not provided"
        }</p>

        <p><strong>Google Maps:</strong> ${
          googleMapsLocation || "Not provided"
        }</p>

        <p><strong>Preferred Commercial Model:</strong> ${
          preferredModel || "Not provided"
        }</p>
      `
          : ""
      }

      ${
        fleetType ||
        vehicleCount ||
        vehicleModels ||
        operatingRoutes ||
        currentChargingSetup ||
        chargingLocations ||
        chargingFrequency
          ? `
        <h3>Fleet Details</h3>

        <p><strong>Fleet Type:</strong> ${
          fleetType || "Not provided"
        }</p>

        <p><strong>Number of Vehicles:</strong> ${
          vehicleCount || "Not provided"
        }</p>

        <p><strong>Vehicle Models:</strong> ${
          vehicleModels || "Not provided"
        }</p>

        <p><strong>Operating Routes:</strong> ${
          operatingRoutes || "Not provided"
        }</p>

        <p><strong>Current Charging Setup:</strong> ${
          currentChargingSetup || "Not provided"
        }</p>

        <p><strong>Required Charging Locations:</strong> ${
          chargingLocations || "Not provided"
        }</p>

        <p><strong>Charging Frequency:</strong> ${
          chargingFrequency || "Not provided"
        }</p>
      `
          : ""
      }

      ${
        franchiseType ||
        investmentRange ||
        preferredCity ||
        preferredState ||
        doYouHaveLocation ||
        locationDetails ||
        operationsExperience
          ? `
        <h3>Franchise Details</h3>

        <p><strong>Partner Type:</strong> ${
          franchiseType || "Not provided"
        }</p>

        <p><strong>Investment Range:</strong> ${
          investmentRange || "Not provided"
        }</p>

        <p><strong>Preferred City:</strong> ${
          preferredCity || "Not provided"
        }</p>

        <p><strong>Preferred State:</strong> ${
          preferredState || "Not provided"
        }</p>

        <p><strong>Already Have a Location:</strong> ${
          doYouHaveLocation || "Not provided"
        }</p>

        <p><strong>Location Details:</strong> ${
          locationDetails || "Not provided"
        }</p>

        <p><strong>Business / Operations Experience:</strong> ${
          operationsExperience || "Not provided"
        }</p>
      `
          : ""
      }

      ${
        infrastructureType ||
        chargerCount ||
        chargerCapacity ||
        locations ||
        currentNetwork ||
        partnershipInterest
          ? `
        <h3>Network Details</h3>

        <p><strong>Infrastructure Type:</strong> ${
          infrastructureType || "Not provided"
        }</p>

        <p><strong>Number of Chargers:</strong> ${
          chargerCount || "Not provided"
        }</p>

        <p><strong>Charger Capacity:</strong> ${
          chargerCapacity || "Not provided"
        }</p>

        <p><strong>Locations:</strong> ${
          locations || "Not provided"
        }</p>

        <p><strong>Current Network:</strong> ${
          currentNetwork || "Not provided"
        }</p>

        <p><strong>Partnership Interest:</strong> ${
          partnershipInterest || "Not provided"
        }</p>
      `
          : ""
      }

      ${
        message
          ? `
        <h3>Additional Information</h3>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `
          : ""
      }
    `;

    const { error } = await resend.emails.send({
      from: "Topup <hello@topupchargers.com>",
      to: "hello@topupchargers.com",
      replyTo: email,
      subject,
      html: details,
    });

    if (error) {
      console.error("Partner email error:", error);

      return NextResponse.json(error, {
        status: 500,
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("Partner API error:", err);

    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}