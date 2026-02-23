let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

const total = document.getElementById('total');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const jobCount = document.getElementById('jobCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');
const emptyState = document.getElementById('emptyState');


function calculateCount() {
    const totalCards = allCardSection.querySelectorAll('.card').length;

    total.innerText = totalCards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus === 'interview-filter-btn') {
        jobCount.innerText = `${interviewList.length} of ${totalCards}`;
    }
    else if (currentStatus === 'rejected-filter-btn') {
        jobCount.innerText = `${rejectedList.length} of ${totalCards}`;
    }
    else {
        jobCount.innerText = totalCards;
    }

    if (totalCards === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

calculateCount();