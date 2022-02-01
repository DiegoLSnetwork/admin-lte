const { Schema, model } = require("mongoose");

const profileSchema = new Schema(
    {
        name: String,
        permissions: {
            addClient: { type: Boolean, default: false },
            editClient: { type: Boolean, default: false },
            deleteClient: { type: Boolean, default: false },
            addInstallation: { type: Boolean, default: false },
            editInstallation: { type: Boolean, default: false },
            deleteInstallation: { type: Boolean, default: false },
            createTicket: { type: Boolean, default: false },
            editTicket: { type: Boolean, default: false },
            deleteTicket: { type: Boolean, default: false },
            createStaff: { type: Boolean, default: false },
            editStaff: { type: Boolean, default: false },
            deleteStaff: { type: Boolean, default: false },
            createInvoice: { type: Boolean, default: false },
            editInvoice: { type: Boolean, default: false },
            deleteInvoice: { type: Boolean, default: false }
        }
    }
);
module.exports = model("Profile", profileSchema);