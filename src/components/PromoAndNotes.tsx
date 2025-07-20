import React, { useState } from "react";
import { FaTag, FaStickyNote } from "react-icons/fa";

const PromoAndNote: React.FC = () => {
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <div className="space-y-6">
      {/* 🎟️ Promo Code Section */}
      <div>
        <button
          onClick={() => setShowPromoInput(!showPromoInput)}
          className="flex items-center text-md text-gray-700 hover:text-gray-900"
        >
          <FaTag className="mr-2" />
          Enter a promo code
        </button>
        {showPromoInput && (
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Promo code"
              className="border border-gray-300 px-3 py-2 w-full sm:w-auto"
            />
            <button className="bg-gray-800 text-white px-4 py-2  hover:bg-gray-900">
              Apply
            </button>
          </div>
        )}
      </div>

      {/* 📝 Add a Note Section */}
      <div>
        <button
          onClick={() => setShowNoteInput(!showNoteInput)}
          className="flex items-center text-md text-gray-700 hover:text-gray-900"
        >
          <FaStickyNote className="mr-2" />
          Add a note
        </button>
        {showNoteInput && (
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Enter your note here..."
            rows={4}
            className="mt-3 w-full border border-gray-300 rounded px-3 py-2"
          />
        )}
      </div>
    </div>
  );
};

export default PromoAndNote;
